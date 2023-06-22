const http = require('httpstatuses');
const { HttpError } = require('../utils/error.js');
const HealthcheckService = require('../services/healthcheckService.js');

class HealthcheckController {
  static healthcheck = async (request, response, next) => {
    try {
      const body = {
        application: true,
        database: await HealthcheckService.check(),
      };

      return response.status(http.ok).json(body);
    } catch (error) {
      next(
          new HttpError(
              'Não foi possível buscar dados de saúde da aplicação',
              http.internalServerError,
              error,
          ),
      );
    }
  };
}

module.exports = HealthcheckController;
