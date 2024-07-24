import { defineConfig } from 'wxt';
import { join } from 'node:path';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],

  runner: {
    chromiumProfile: join(process.cwd(), '.wxt/chromium-profile'),
    keepProfileChanges: true,
    profileCreateIfMissing: true,
  },

  manifest: {
    permissions: [
      'activeTab',
      'storage',
    ],
    optional_permissions: [

    ],
  },
});
