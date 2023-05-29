import { Schema, model } from 'mongoose';

const HealthcheckSchema = new Schema(
    {
      alive: { type: Boolean, required: true },
    },
    { collection: 'healthcheck' },
);

const healthcheck = model('healthcheck', HealthcheckSchema);

export default healthcheck;
