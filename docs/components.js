
module.exports = {
  components: {
    schemas: {
      healthcheckBody: {
        type: 'object',
        required: ['database'],
        properties: {
          database: {
            type: 'boolean',
            description:
              'Define se a validação do banco de dados deve ou não ser feita',
            example: true,
          },
        },
      },
      error422: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Descrição do erro',
            example: 'Dados inválidos',
          },
          headers: {
            type: 'object',
            description: 'Headers onde foram identificados erros',
            example: {
              'x-request-id': 'O campo é obrigatório',
            },
          },
          body: {
            type: 'object',
            description: 'Campos do body onde foram identificados erros',
            example: {
              database: 'Tipo de dado incorreto',
            },
          },
        },
      },
      error5xx: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Descrição do erro',
            example: 'Ops, algo deu errado. Tente novamente',
          },
        },
      },
    },
  },
};
