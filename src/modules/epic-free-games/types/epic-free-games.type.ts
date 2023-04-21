import { Country, Locale, OfferGame } from '../../../core'

export interface EpicFreeGamesOptions {
  /**
   * price and currency will change according to this value
   */
  readonly country?: Country
  /**
   * include all offers like DLC's or hidden games
   */
  readonly includeAll?: boolean
  /**
   * localization will change according to this value
   */
  readonly locale?: Locale
}

export interface GetGames {
  /**
   * price and currency will change according to this value
   */
  readonly country?: Country
  /**
   * include all offers like DLC's or hidden games
   */
  readonly includeAll?: boolean
  /**
   * localization will change according to this value
   */
  readonly locale?: Locale
}

export interface GetGamesOutput {
  currentGames: OfferGame[]
  nextGames: OfferGame[]
}

export interface GetCurrentGames {
  readonly offerGames: OfferGame[]
  readonly includeAll?: boolean
}

export interface GetNextGames {
  readonly offerGames: OfferGame[]
  readonly includeAll?: boolean
}

export interface IsBaseGame {
  readonly offerGame: OfferGame
  readonly includeAll?: boolean
}

export interface HasPromotionalOffers {
  readonly offerGame: OfferGame
}

export interface HasUpcomingPromotionalOffers {
  readonly offerGame: OfferGame
}

export interface IsFree {
  readonly offerGame: OfferGame
}

export interface InThisWeek {
  readonly offerGame: OfferGame
}

export interface InNextWeek {
  readonly offerGame: OfferGame
}

export interface WillBeFree {
  readonly offerGame: OfferGame
}
