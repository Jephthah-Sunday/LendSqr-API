
const dotenv = require('dotenv');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      const env = dotenv.config().parsed;
      
      config.env.API_KEY = process.env.CYPRESS_API_KEY;
      config.env.API_KEY_TWO = process.env.CYPRESS_API_KEY_TWO;
      
      return config; 
    }
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  }
};


