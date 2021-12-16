import axios from "axios";

export interface ObjectType {
  title: string;
  id: string;
  namespace: string;
  description: string;
  effectiveDate: string;
  offerType: string;
  expiryDate: boolean;
  status: string;
  isCodeRedemptionOnly: boolean;
  keyImages: {
    type: string;
    url: string;
  }[];
  seller: {
    id: string;
    name: string;
  };
  productSlug: string;
  urlSlug: string;
  url: boolean;
  items: {
    id: string;
    namespace: string;
  }[];
  customAttributes: {
    key: string;
    value: string;
  }[];
  categories: {
    path: string;
  }[];
  tags: {
    id: string;
  }[];
  price: {
    totalPrice: {
      discountPrice: number;
      originalPrice: number;
      voucherDiscount: number;
      discount: number;
      currencyCode: string;
      currencyInfo: {
        decimals: number;
      };
      fmtPrice: {
        originalPrice: string;
        discountPrice: string;
        intermediatePrice: string;
      };
    };
    lineOffers: { appliedRules: [] }[];
  };
  promotions: {
    promotionalOffers: {
      promotionalOffers: {
        startDate: string;
        endDate: string;
        discountSetting: {
          discountType: string;
          discountPercentage: number;
        };
      }[];
    }[];
    upcomingPromotionalOffers: [];
  };
}

export interface ResultType {
  currents: ObjectType[];
  nexts: ObjectType[];
}

export type CountryType =
  | "TR"
  | "US"
  | "GB"
  | "DE"
  | "AR"
  | "ES"
  | "MX"
  | "FR"
  | "IT"
  | "JP"
  | "KR"
  | "PL"
  | "BR"
  | "RU"
  | "TH"
  | "CN";

const countryCodes = [
  "TR",
  "US",
  "GB",
  "DE",
  "AR",
  "ES",
  "MX",
  "FR",
  "IT",
  "JP",
  "KR",
  "PL",
  "BR",
  "RU",
  "TH",
  "CN",
];

/**
 * @author Aykut Saki <aykutsakisocial@gmail.com>
 * @async
 * @function
 * @name getGames
 * @param {string} country ISO country code
 * @returns currents: games that are currently free. nexts: announced games that will be free.
 */
export const getGames = async (
  country: CountryType = "US"
): Promise<ResultType> => {
  try {
    if (country.toUpperCase() !== country)
      throw new TypeError(
        `Country code must be uppercase your code: ${country}`
      );
    const { data } = await axios.get(
      `https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?country=${country}`
    );

    if (data?.errors)
      throw new Error(
        `An error occurred
        error: ${data.errors.map((err: any) =>
          JSON.stringify(err, Object.getOwnPropertyNames(err), "\t")
        )}
        `
      );

    const freeGames: ObjectType[] =
      data?.data?.Catalog?.searchStore?.elements?.filter(
        (game: ObjectType) =>
          (game?.offerType === "BASE_GAME" ||
            game?.promotions?.promotionalOffers?.length !== 0 ||
            game?.promotions?.upcomingPromotionalOffers?.length !== 0) &&
          game?.price?.totalPrice?.discountPrice === 0
      );

    const currents: ObjectType[] = freeGames?.filter(
      (game: ObjectType) =>
        game?.price?.lineOffers[0]?.appliedRules?.length !== 0 ||
        Date.parse(
          game?.promotions?.promotionalOffers[0]?.promotionalOffers[0]
            ?.startDate
        ) < Date.now()
    );

    const nexts: ObjectType[] = freeGames.filter(
      (game: ObjectType) =>
        game?.promotions?.upcomingPromotionalOffers?.length !== 0 &&
        game?.promotions !== null
    );

    return { currents, nexts };
  } catch (error) {
    throw new Error(error as string);
  }
};
