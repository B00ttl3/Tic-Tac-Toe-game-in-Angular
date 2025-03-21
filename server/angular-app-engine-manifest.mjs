
export default {
  basePath: '/Tic-Tac-Toe-game-in-Angular',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
