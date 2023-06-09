const { Schema, model } = require('mongoose');

const HealthcheckSchema = new Schema(
    {
      alive: { type: Boolean, required: true },
    },
    { collection: 'healthcheck' },
);

const healthcheck = model('healthcheck', HealthcheckSchema);

module.exports = healthcheck;
