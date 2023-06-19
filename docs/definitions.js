const appVersion = process.env.npm_package_version || '0.0.0';

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Creche Batatinha',
    version: appVersion,
    description: 'Documentação da API do projeto Creche Batatinha',
    license: {
      name: 'GLP-3.0',
      url: 'https://www.gnu.org/licenses/gpl-3.0.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor de desenvolvimento',
    },
  ],
};
