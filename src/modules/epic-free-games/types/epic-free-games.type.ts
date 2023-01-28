import { Country, OfferGame } from '../../../core'

export interface EpicFreeGamesOptions {
  readonly country: Country
  readonly includeAll: boolean
}

export interface GetGames {
  readonly country?: Country
  readonly includeAll?: boolean
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
