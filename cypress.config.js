const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.CYPRESS_BASE_URL;

module.exports = defineConfig({
  env: {
    apiUrl: process.env.REACT_APP_API_URL,
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: url,
  },
});
