const healthcheck = require('../models/Healthcheck.js');

class HealthcheckService {
  static check = async () => {
    const dbItem = await healthcheck.findOne();
    return dbItem.alive;
  };
}

module.exports = HealthcheckService;
