import axios from "axios";

type ResultType = { currents: object[]; nexts: object[] };

/**
 * @author Aykut Saki <aykutsakisocial@gmail.com>
 * @async
 * @function
 * @name getGames
 * @returns currents: games that are currently free. nexts: announced games that will be free.
 */
export const getGames = async (): Promise<ResultType> => {
  const { data } = await axios.get(
    "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions"
  );

  const freeGames: [] = data.data.Catalog.searchStore.elements.filter(
    (game: { offerType: string }) => game.offerType === "BASE_GAME"
  );

  const currents: object[] = freeGames.filter(
    (game: { effectiveDate: string }) =>
      Date.parse(game.effectiveDate) < Date.now()
  );

  const nexts: object[] = freeGames.filter(
    (game: { effectiveDate: string }) =>
      Date.parse(game.effectiveDate) > Date.now()
  );

  return { currents, nexts };
};
