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
        lineOffers: {
            appliedRules: [];
        }[];
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
export declare type Country = "TR" | "US" | "GB" | "DE" | "AR" | "ES" | "MX" | "FR" | "IT" | "JP" | "KR" | "PL" | "BR" | "RU" | "TH" | "CN";
/**
 * @author Aykut Saki <aykutsakisocial@gmail.com>
 * @async
 * @function
 * @name getGames
 * @param {string} country ISO country code
 * @param {boolean} includeAll include all offers like DLC's
 * @returns currentGames: games that are currently free. nextGames: announced games that will be free.
 */
export declare const getGames: (country?: Country, includeAll?: boolean) => Promise<{
    currentGames: OfferGame[];
    nextGames: OfferGame[];
}>;
//# sourceMappingURL=index.d.ts.map