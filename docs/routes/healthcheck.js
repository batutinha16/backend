module.exports = {
  '/healthcheck': {
    get: {
      tags: ['Internos'],
      description: 'Health Check',
      operationId: 'healthcheck',
      parameters: [
        {
          in: 'header',
          name: 'X-Request-ID',
          schema: {
            type: 'string',
            format: 'uuid',
          },
          required: true,
        },
      ],
      requestBody: {
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              '$ref': '#/components/schemas/healthcheckBody',
            },
          },
          'application/json': {
            schema: {
              '$ref': '#/components/schemas/healthcheckBody',
            },
          },
        },
      },
      responses: {
        200: {
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
        422: {
          description: 'Erros de validação',
          content: {
            'application/json': {
              schema: {
                '$ref': '#/components/schemas/error422',
              },
            },
          },
        },
        500: {
          description: 'Erros internos',
          content: {
            'application/json': {
              schema: {
                '$ref': '#/components/schemas/error5xx',
              },
            },
          },
        },
      },
    },
  },
};
