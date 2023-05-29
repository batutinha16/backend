import HealthcheckService from '../services/healthcheckService.js';

class HealthcheckController {
  static healthcheck = async (request, response) => {
    const body = {
      application: true,
      database: await HealthcheckService.check(),
    };

    return response.status(200).json(body);
  };
}

export default HealthcheckController;
