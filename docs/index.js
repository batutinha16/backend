const definitions = require('./definitions');
const components = require('./components');
const routes = require('./routes');

module.exports = {
  ...definitions,
  ...components,
  ...routes,
};
