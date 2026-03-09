const DARK = {
  bg:    '#131210',
  sf:    '#1C1A17',
  el:    '#242119',
  bd:    '#332F28',
  b2:    '#262320',
  tx:    '#E2DDD5',
  t2:    '#A09888',
  t3:    '#6E6558',
  ac:    '#C48850',
  ab:    '#DA9E66',
  ad:    'rgba(196,136,80,0.12)',
  ok:    '#82C9A0',
  od:    'rgba(130,201,160,0.08)',
  no:    '#D88A7A',
  nd:    'rgba(216,138,122,0.08)',
  wa:    '#F59E0B',
  bAc:   'rgba(196,136,80,0.12)',
  bOk:   'rgba(130,201,160,0.12)',
  bWa:   'rgba(245,158,11,0.12)',
  bNo:   'rgba(216,138,122,0.12)',
  bNw:   'rgba(196,136,80,0.08)',
  grid:  'rgba(255,255,255,0.015)',
  hover: 'rgba(255,255,255,0.03)',
};

const LIGHT = {
  bg:    '#F5F2EC',
  sf:    '#FDFCF9',
  el:    '#F0EDE5',
  bd:    '#D4CFC5',
  b2:    '#E2DDD5',
  tx:    '#2C2A25',
  t2:    '#6E6558',
  t3:    '#A09888',
  ac:    '#A06C2E',
  ab:    '#7D5220',
  ad:    'rgba(160,108,46,0.10)',
  ok:    '#2D7A4F',
  od:    'rgba(45,122,79,0.06)',
  no:    '#B5493A',
  nd:    'rgba(181,73,58,0.06)',
  wa:    '#D97706',
  bAc:   'rgba(160,108,46,0.10)',
  bOk:   'rgba(45,122,79,0.08)',
  bWa:   'rgba(217,119,6,0.10)',
  bNo:   'rgba(181,73,58,0.08)',
  bNw:   'rgba(160,108,46,0.06)',
  grid:  'rgba(0,0,0,0.02)',
  hover: 'rgba(0,0,0,0.04)',
};

export const C = { ...DARK };

export function setTheme(mode) {
  const palette = mode === 'light' ? LIGHT : DARK;
  Object.assign(C, palette);
}

export function getCSS() {
  return `@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}@keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}*{box-sizing:border-box;margin:0;padding:0}body{font-family:'Source Sans 3','Source Sans Pro',sans-serif;background:${C.bg};color:${C.tx}}::-webkit-scrollbar{width:5px;height:5px}::-webkit-scrollbar-track{background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.bd};border-radius:3px}::-webkit-scrollbar-thumb:hover{background:${C.t3}}input:focus,textarea:focus,select:focus{outline:none;border-color:${C.ac}!important}`;
}
