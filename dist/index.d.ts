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
        upcomingPromotionalOffers: [];
    };
}
export interface ResultType {
    currents: ObjectType[];
    nexts: ObjectType[];
}
export declare type CountryType = "TR" | "US" | "GB" | "DE" | "AR" | "ES" | "MX" | "FR" | "IT" | "JP" | "KR" | "PL" | "BR" | "RU" | "TH" | "CN";
/**
 * @author Aykut Saki <aykutsakisocial@gmail.com>
 * @async
 * @function
 * @name getGames
 * @param {string} country ISO country code
 * @returns currents: games that are currently free. nexts: announced games that will be free.
 */
export declare const getGames: (country?: CountryType) => Promise<ResultType>;
//# sourceMappingURL=index.d.ts.map