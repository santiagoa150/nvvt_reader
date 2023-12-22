import * as Joi from 'joi';

/**
 * Schema for validating environment variables.
 * @type {ObjectSchema}
 */
export const EnvSchema: Joi.ObjectSchema = Joi.object({
  APP_PREFIX: Joi.string(),
  APP_PORT: Joi.number().port(),
  SWAGGER_TITLE: Joi.string(),
  SWAGGER_URL: Joi.string(),
})
  .options({ presence: 'required' })
  .required();
