import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// ============================================================
// Storage shim
// ------------------------------------------------------------
// The artifact uses window.storage (a Claude-specific API).
// Outside of artifacts, we back the same API with localStorage
// so the rest of the app code doesn't have to change.
// localStorage gives us ~5 MB per domain, which is plenty for
// trades + confluences + profile. Screenshots are compressed.
// ============================================================
if (!window.storage) {
  window.storage = {
    get: async (key) => {
      try {
        const v = localStorage.getItem(key);
        return v !== null ? { key, value: v, shared: false } : null;
      } catch (e) {
        console.warn('storage.get failed:', e.message);
        return null;
      }
    },
    set: async (key, value) => {
      try {
        localStorage.setItem(key, value);
        return { key, value, shared: false };
      } catch (e) {
        // QuotaExceededError or SecurityError
        console.warn('storage.set failed:', e.message);
        return null;
      }
    },
    delete: async (key) => {
      try {
        localStorage.removeItem(key);
        return { key, deleted: true, shared: false };
      } catch (e) {
        return null;
      }
    },
    list: async (prefix) => {
      try {
        const keys = Object.keys(localStorage).filter(k => !prefix || k.startsWith(prefix));
        return { keys, prefix, shared: false };
      } catch (e) {
        return { keys: [], prefix, shared: false };
      }
    },
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
