const Joi = require("joi");

const authorBodySchema = Joi.object({
  name: Joi.string().max(30).required(),
  pages: Joi.number().min(1).required(),
  author: Joi.string().required(),
});

module.exports = authorBodySchema;
