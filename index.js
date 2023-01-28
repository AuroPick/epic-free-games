const { EpicFreeGames } = require('./dist')

const instance = new EpicFreeGames({ country: 'TR', includeAll: false })

const run = async () => {
  const games = await instance.getGames()

  console.log(games)
}

run()
