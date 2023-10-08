import { EpicFreeGamesUtil } from './epic-free-games.util'
import {
  EpicFreeGamesOptions,
  GetCurrentGames,
  GetGames,
  GetGamesOutput,
  GetNextGames
} from './types'
import { OfferGame } from '../../core'
import { EpicGames } from '../epic-games'

/**
 * @author Aykut Saki <aykutsakisocial@gmail.com>
 */
export class EpicFreeGames {
  private readonly epicFreeGamesUtil: EpicFreeGamesUtil

  private readonly epicGames: EpicGames

  constructor(options: EpicFreeGamesOptions = {}) {
    this.epicFreeGamesUtil = new EpicFreeGamesUtil(options)
    this.epicGames = new EpicGames()
  }

  async getGames(options: GetGames = {}): Promise<GetGamesOutput> {
    const country = this.epicFreeGamesUtil.getSafeCountry(options.country)
    const locale = this.epicFreeGamesUtil.getSafeLocale(options.locale)

    const offerGames: OfferGame[] = await this.epicGames.getGames({ country, locale })

    const currentGames = this.getCurrentGames({ offerGames, includeAll: options.includeAll })
    const nextGames = this.getNextGames({ offerGames, includeAll: options.includeAll })

    return { currentGames, nextGames }
  }

  private getCurrentGames(data: GetCurrentGames) {
    return data.offerGames.filter(
      (offerGame) =>
        this.epicFreeGamesUtil.isBaseGame({ offerGame, includeAll: data.includeAll }) &&
        this.epicFreeGamesUtil.hasPromotionalOffers({ offerGame }) &&
        this.epicFreeGamesUtil.isFree({ offerGame }) &&
        this.epicFreeGamesUtil.inThisWeek({ offerGame })
    )
  }

  private getNextGames(data: GetNextGames) {
    return data.offerGames.filter(
      (offerGame) =>
        this.epicFreeGamesUtil.isBaseGame({ offerGame, includeAll: data.includeAll }) &&
        this.epicFreeGamesUtil.hasUpcomingPromotionalOffers({ offerGame }) &&
        this.epicFreeGamesUtil.willBeFree({ offerGame }) &&
        this.epicFreeGamesUtil.inNextWeek({ offerGame })
    )
  }
}
