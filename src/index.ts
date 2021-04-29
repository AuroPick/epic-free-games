import axios from "axios";

interface ObjectTypes {
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

interface ResultType {
  currents: ObjectTypes[];
  nexts: ObjectTypes[];
}

type CountryType =
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

const countryCodes = ["TR", "US", "GB", "DE", "AR", "ES", "MX", "FR", "IT", "JP", "KR", "PL", "BR", "RU", "TH", "CN"];

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

    if (data?.errors) throw new TypeError(`Invalid country code country codes:\n${countryCodes}\nDefault US`);

    const freeGames: ObjectTypes[] = data?.data?.Catalog?.searchStore?.elements?.filter(
      (game: { offerType: string }) => game.offerType === "BASE_GAME"
    );

    const currents: ObjectTypes[] = freeGames?.filter(
      (game: ObjectTypes) =>
        game?.price?.lineOffers[0]?.appliedRules?.length !== 0 || Date.parse(game?.promotions?.promotionalOffers[0]?.promotionalOffers[0]?.startDate) < Date.now()
    );

    const nexts: ObjectTypes[] = freeGames.filter(
      (game: ObjectTypes) =>
        game?.promotions?.upcomingPromotionalOffers?.length !== 0 && game?.promotions !== null
    );

    return { currents, nexts };
  } catch (error) {
    throw new Error(error);
  }
};
