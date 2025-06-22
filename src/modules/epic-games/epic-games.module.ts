import fetch from 'node-fetch'

import { GetGames } from './types'

export class EpicGames {
  async getGames(options: GetGames) {
    const url = new URL('https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions')

    url.searchParams.set('country', options.country)
    url.searchParams.set('locale', options.locale)

    const response = await fetch(url.toString(), {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = (await response.json()) as any

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
