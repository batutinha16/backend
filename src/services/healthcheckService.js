import healthcheck from '../models/Healthcheck.js';

class HealthcheckService {
  static check = async () => {
    const dbItem = await healthcheck.findOne();
    return dbItem.alive;
  };
}

export default HealthcheckService;
