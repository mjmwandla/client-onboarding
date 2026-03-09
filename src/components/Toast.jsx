import { useEffect } from 'react';
import { C } from '../constants/colors';

export const Toast = ({ msg, type, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, background: type === 'success' ? C.ok : type === 'warning' ? C.wa : C.no, color: '#fff', padding: '14px 24px', borderRadius: 3, fontSize: 14, fontWeight: 500, zIndex: 9999, boxShadow: '0 8px 32px rgba(0,0,0,.4)', animation: 'slideUp .3s ease' }}>
      {msg}
    </div>
  );
};
