import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run prime-form-peak:serve:development',
        production: 'nx run prime-form-peak:serve:production',
      },
      ciWebServerCommand: 'nx run prime-form-peak:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
