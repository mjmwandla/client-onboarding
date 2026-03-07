export const C = {
  bg: '#0A0F1E',
  sf: '#111827',
  el: '#1C2333',
  ac: '#3B82F6',
  ok: '#10B981',
  wa: '#F59E0B',
  no: '#EF4444',
  tx: '#F9FAFB',
  t2: '#9CA3AF',
  bd: '#1F2937',
  b2: '#374151',
};

export const CSS = `@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}@keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}*{box-sizing:border-box;margin:0;padding:0}body{font-family:system-ui,sans-serif}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.b2};border-radius:3px}input:focus,textarea:focus,select:focus{outline:none;border-color:${C.ac}!important}`;
