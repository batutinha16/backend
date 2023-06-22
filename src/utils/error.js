const http = require('httpstatuses');
const validationErrorMessages = require('../enums/validationErrorMessages.js');

function validationErrorHandler(error) {
  if (error?.status !== http.badRequest || !error?.errors) {
    return null;
  }

  const fields = {
    headers: {},
    body: {},
  };

  error.errors.forEach(({ path, errorCode }) => {
    const [location, fieldName] = path.slice(1).split('/');

    fields[location][fieldName] =
      validationErrorMessages[errorCode] || validationErrorMessages.default;
  });

  return {
    status: http.unprocessableEntity,
    body: {
      message: 'Dados inválidos',
      ...(Object.keys(fields.headers).length && { headers: fields.headers }),
      ...(Object.keys(fields.body).length && { body: fields.body }),
    },
  };
}

function genericErrorHandler(error) {
  return {
    status: http[error?.status] ? error?.status : 500,
    body: {
      message: error?.message || 'Ops, algo deu errado. Tente novamente.',
    },
  };
}

class HttpError extends Error {
  constructor(message, code = 500, stack = {}) {
    super(message);
    this.message = message;
    this.code = code;
    this.stack = stack;
  }
}

module.exports = {
  validationErrorHandler,
  genericErrorHandler,
  HttpError,
};
