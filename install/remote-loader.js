(() => {
  'use strict';

  const PROJECT = 'JellyNav';
  const SOURCE = 'https://raw.githubusercontent.com/isaacAmejia/jellynav/main/src/jellyfin-tv-navigation.js';
  const CACHE_KEY = '__jellypi_loader_jellynav_v1__';

  function run(code, sourceLabel) {
    const script = document.createElement('script');
    script.textContent = `${code}\n//# sourceURL=${sourceLabel}`;
    (document.head || document.documentElement).appendChild(script);
    script.remove();
  }

  (async () => {
    try {
      const response = await fetch(
        `${SOURCE}?jellypi=${Date.now()}`,
        {
          cache: 'no-store',
          credentials: 'omit'
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub returned HTTP ${response.status}`);
      }

      const code = await response.text();

      if (!code.includes('__JELLYFIN_TV_REMOTE__')) {
        throw new Error('Downloaded file does not look like JellyNav');
      }

      try {
        localStorage.setItem(CACHE_KEY, code);
      } catch (_) {}

      run(code, SOURCE);
    } catch (error) {
      console.warn('[JellyNav Loader] Could not fetch latest GitHub build:', error);

      let cached = null;

      try {
        cached = localStorage.getItem(CACHE_KEY);
      } catch (_) {}

      if (cached) {
        console.warn('[JellyNav Loader] Starting last successfully fetched build.');
        run(cached, `${SOURCE}#cached`);
      }
    }
  })();
})();
