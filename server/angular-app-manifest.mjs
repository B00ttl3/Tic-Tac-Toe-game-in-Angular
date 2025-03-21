
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Tic-Tac-Toe-game-in-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Tic-Tac-Toe-game-in-Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1457, hash: 'f16630e0cb217de7806aa7a8b608dca61f1e71f3ee868a94a36097c608bb809d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1234, hash: 'fe3082866053457257149b4f21699564b7b878b5ffe1853b68804d44ab19fc56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11778, hash: '7ed10d45fb705b93fcc655d0739f5ff9155325652f319f05b2fe44c257db7182', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7NPYWDRQ.css': {size: 1812, hash: '/kuu8aiWy/0', text: () => import('./assets-chunks/styles-7NPYWDRQ_css.mjs').then(m => m.default)}
  },
};
