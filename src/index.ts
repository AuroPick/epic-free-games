import axios from "axios";
import moment from "moment";

export interface OfferGame {
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
    upcomingPromotionalOffers: {
      promotionalOffers: {
        startDate: string;
        endDate: string;
        discountSetting: {
          discountType: string;
          discountPercentage: number;
        };
      }[];
    }[];
  };
}

export interface Result {
  currentGames: OfferGame[];
  nextGames: OfferGame[];
}

export type Country =
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

/**
 * @author Aykut Saki <aykutsakisocial@gmail.com>
 * @async
 * @function
 * @name getGames
 * @param {string} country ISO country code
 * @param {boolean} includeAll include all offers like DLC's
 * @returns currentGames: games that are currently free. nextGames: announced games that will be free.
 */
export const getGames = async (country: Country = "US", includeAll: boolean = false) => {
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

    const { currentGames, nextGames }: Result =
      data?.data?.Catalog?.searchStore?.elements?.reduce(
        (acc: Result, curr: OfferGame) => {
          const isBaseGame = includeAll ? true : curr.offerType === "BASE_GAME";

          const hasPromotionalOffers =
            curr.promotions?.promotionalOffers?.length !== 0;

          const hasUpcomingPromotionalOffers =
            curr.promotions?.upcomingPromotionalOffers?.length !== 0;

          const isFree = curr.price?.totalPrice?.discountPrice === 0;

          const inThisWeek =
            moment() >
              moment(
                curr.promotions?.promotionalOffers[0]?.promotionalOffers[0]
                  ?.startDate
              ) &&
            moment() <
              moment(
                curr.promotions?.promotionalOffers[0]?.promotionalOffers[0]
                  ?.endDate
              );

          const inNextWeek =
            moment().add(1, "week") >
              moment(
                curr.promotions?.upcomingPromotionalOffers[0]
                  ?.promotionalOffers[0]?.startDate
              ) &&
            moment().add(1, "week") <
              moment(
                curr.promotions?.upcomingPromotionalOffers[0]
                  ?.promotionalOffers[0]?.endDate
              );

          const willBeFree =
            curr.promotions?.upcomingPromotionalOffers[0]?.promotionalOffers[0]
              ?.discountSetting?.discountPercentage === 0;

          if (isBaseGame && hasPromotionalOffers && isFree && inThisWeek)
            return { ...acc, currentGames: [...acc.currentGames, curr] };

          if (
            isBaseGame &&
            hasUpcomingPromotionalOffers &&
            willBeFree &&
            inNextWeek
          )
            return { ...acc, nextGames: [...acc.nextGames, curr] };

          return { ...acc };
        },
        {
          currentGames: [],
          nextGames: [],
        } as Result
      );

    return { currentGames, nextGames };
  } catch (error) {
    throw new Error(error as string);
  }
};
