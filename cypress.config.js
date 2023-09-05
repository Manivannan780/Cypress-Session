const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    viewportWidth: 1536,
    viewportHeight: 960,
    chromeWebSecurity: false,
    screenshotOnRunFailure: false,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 90000,
    numTestsKeptInMemory: 0,
    baseUrl:"https://petstore.octoperf.com/actions",
    testIsolation: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
