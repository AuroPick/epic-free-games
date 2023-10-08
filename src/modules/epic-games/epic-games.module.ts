import axios from 'axios'

import { GetGames } from './types'

export class EpicGames {
  async getGames(options: GetGames) {
    const { data } = await axios.get(
      'https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions',
      {
        params: { country: options.country, locale: options.locale },
        headers: { 'Access-Control-Allow-Origin': '*' }
      }
    )

    if (data?.errors && !data?.data?.Catalog?.searchStore)
      throw new Error(
        `An error occurred
        error: ${data.errors.map((err: any) =>
          JSON.stringify(err, Object.getOwnPropertyNames(err), '\t')
        )}
        `
      )

    if (!data?.data?.Catalog?.searchStore?.elements)
      throw new Error('Could not receive data. There may be a problem with Epic Games')

    return data?.data?.Catalog?.searchStore?.elements
  }
}
