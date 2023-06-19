const healthcheck = require('./healthcheck.js');

module.exports = {
  paths: {
    '/': {
      get: {
        tags: ['Internos'],
        description: 'Base URL',
        operationId: 'helloWorld',
        parameters: [],
        responses: {
          '200': {
            description: 'Essa rota é um exemplo',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Apenas uma mensagem',
                      example: 'Hello World',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    ...healthcheck,
  },
};

