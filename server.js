import app from './src/app.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info(`Server started at port http://localhost:${port}/`);
});
