module.exports = {
  '/healthcheck': {
    get: {
      tags: ['Internos'],
      description: 'Health Check',
      operationId: 'healthcheck',
      parameters: [],
      responses: {
        '200': {
          description: 'Informa a saúde da aplicação',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  application: {
                    type: 'boolean',
                    description: 'Informa se a aplicação está respondendo',
                    example: true,
                  },
                  database: {
                    type: 'boolean',
                    description: 'Informa se o banco de dados está respondendo',
                    example: false,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

