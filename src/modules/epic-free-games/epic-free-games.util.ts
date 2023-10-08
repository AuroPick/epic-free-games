import deepmergeModule from '@fastify/deepmerge'
import dayjs from 'dayjs'

import {
  EpicFreeGamesOptions,
  HasPromotionalOffers,
  HasUpcomingPromotionalOffers,
  InNextWeek,
  InThisWeek,
  IsBaseGame,
  IsFree,
  WillBeFree
} from './types'
import { Country, Locale } from '../../core'

const deepmerge = deepmergeModule()

export class EpicFreeGamesUtil {
  private readonly options: EpicFreeGamesOptions = {
    country: 'US',
    includeAll: false,
    locale: 'en-US'
  }

  constructor(options: EpicFreeGamesOptions = {}) {
    this.options = deepmerge(this.options, options)
  }

  getSafeCountry(country?: Country): Country {
    return typeof country === 'string' ? country : this.options.country || 'US'
  }

  getSafeIncludeAll(includeAll?: boolean): boolean {
    return typeof includeAll === 'boolean' ? includeAll : this.options.includeAll || false
  }

  getSafeLocale(locale?: Locale): Locale {
    return typeof locale === 'string' ? locale : this.options.locale || 'en-US'
  }

  isBaseGame(data: IsBaseGame): boolean {
    const includeAll = this.getSafeIncludeAll(data.includeAll)

    return includeAll ? true : data.offerGame.offerType === 'BASE_GAME'
  }

  hasPromotionalOffers(data: HasPromotionalOffers): boolean {
    return data.offerGame.promotions?.promotionalOffers?.length !== 0
  }

  hasUpcomingPromotionalOffers(data: HasUpcomingPromotionalOffers): boolean {
    return data.offerGame.promotions?.upcomingPromotionalOffers?.length !== 0
  }

  isFree(data: IsFree): boolean {
    return data.offerGame.price?.totalPrice?.discountPrice === 0
  }

  inThisWeek(data: InThisWeek): boolean {
    return (
      dayjs().isAfter(
        data.offerGame.promotions?.promotionalOffers[0]?.promotionalOffers[0]?.startDate
      ) &&
      dayjs().isBefore(
        data.offerGame.promotions?.promotionalOffers[0]?.promotionalOffers[0]?.endDate
      )
    )
  }

  inNextWeek(data: InNextWeek): boolean {
    return (
      dayjs()
        .add(1, 'week')
        .isAfter(
          data.offerGame.promotions?.upcomingPromotionalOffers[0]?.promotionalOffers[0]?.startDate
        ) &&
      dayjs()
        .add(1, 'week')
        .isBefore(
          data.offerGame.promotions?.upcomingPromotionalOffers[0]?.promotionalOffers[0]?.endDate
        )
    )
  }

  willBeFree(data: WillBeFree): boolean {
    return (
      data.offerGame.promotions?.upcomingPromotionalOffers[0]?.promotionalOffers[0]?.discountSetting
        ?.discountPercentage === 0
    )
  }
}
