import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4000/api',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  videosFolder: "cypress/videos"
});
