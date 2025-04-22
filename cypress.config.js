const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  trashAssetsBeforeRuns: false,
  video: true,
  screenshotOnRunFailure: false,
  watchForFileChanges: false,
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: true,
      html: false,
      json: true,
      reportFilename: "[name]",
    },
  },

  env: {
    url:"https://opensource-demo.orangehrmlive.com",
    userName:'Admin',
    password:'admin123'

  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    testIsolation: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});