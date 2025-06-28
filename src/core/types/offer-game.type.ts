export interface OfferGame {
  title: string
  id: string
  namespace: string
  description: string
  effectiveDate: string
  offerType: string
  expiryDate: boolean | null
  viewableDate: string
  status: string
  isCodeRedemptionOnly: boolean
  keyImages: {
    type: string
    url: string
  }[]
  seller: {
    id: string
    name: string
  }
  productSlug: string | null
  urlSlug: string
  url: boolean | null
  items: {
    id: string
    namespace: string
  }[]
  customAttributes: {
    key: string
    value: string
  }[]
  categories: {
    path: string
  }[]
  tags: {
    id: string
  }[]
  catalogNs: {
    mappings: {
      pageSlug: string
      pageType: string
    }[]
  }
  offerMappings: {
    pageSlug: string
    pageType: string
  }[]
  price: {
    totalPrice: {
      discountPrice: number
      originalPrice: number
      voucherDiscount: number
      discount: number
      currencyCode: string
      currencyInfo: {
        decimals: number
      }
      fmtPrice: {
        originalPrice: string
        discountPrice: string
        intermediatePrice: string
      }
    }
    lineOffers: { 
      appliedRules: { 
        id: string; 
        endDate: string 
        discountSetting: {
          discountType: string
        }
      }[] 
    }[]
  }
  promotions: {
    promotionalOffers: {
      promotionalOffers: {
        startDate: string
        endDate: string
        discountSetting: {
          discountType: string
          discountPercentage: number
        }
      }[]
    }[]
    upcomingPromotionalOffers: {
      promotionalOffers: {
        startDate: string
        endDate: string
        discountSetting: {
          discountType: string
          discountPercentage: number
        }
      }[]
    }[]
  }
}
