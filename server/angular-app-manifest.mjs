
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
    'index.csr.html': {size: 1457, hash: '284dbef5e393732f94384b43ec5f4b2adad964a256665c3c78bcd1d4d082e4bb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1234, hash: '48622130bc7f57b666e39dfdd3cd693d4f68b25c27bcb0752f418817b077f73d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11778, hash: '632cc7fba01136b04430fed2d5138235cd5d42a317cbfd4a4bfbc76147853f11', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7NPYWDRQ.css': {size: 1812, hash: '/kuu8aiWy/0', text: () => import('./assets-chunks/styles-7NPYWDRQ_css.mjs').then(m => m.default)}
  },
};
