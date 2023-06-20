const app = require('./src/app.js');
const {
  validationErrorHandler,
  genericErrorHandler,
} = require('./src/utils/error.js');

const port = process.env.PORT || 3000;

app.use((error, req, res, next) => {
  const parsedError =
    validationErrorHandler(error) || genericErrorHandler(error);

  res.status(parsedError.status).json(parsedError.body);
});

app.listen(port, () => {
  console.info(`Server started at port http://localhost:${port}/`);
});
