import axios from "axios";

type ResultType = [{ currents: object[] }, { nexts: object[] }];

const getGames = async (): Promise<ResultType> => {
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

  return [{ currents }, { nexts }];
};

export default getGames;
