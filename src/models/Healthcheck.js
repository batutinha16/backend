const { Schema, model } = require('mongoose');

const HealthcheckSchema = new Schema(
    {
      alive: { type: Boolean, required: true },
    },
);

const healthcheck = model('healthchecks', HealthcheckSchema);

module.exports = healthcheck;
