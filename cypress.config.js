const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions:{
    reporterEnabled: 'spec, mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
    },
  },

  e2e: {
    baseUrl: 'https://practicesoftwaretesting.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
