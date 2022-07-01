const Joi = require('joi');

// const id = Joi.string().uuid();
const id = Joi.number().integer();
const name = Joi.string();
const price = Joi.number().integer().min(10);
const description = Joi.string();
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description,
  image: image
});

const findOneProductSchema = Joi.object({
  id: id.required()
});

module.exports = { createProductSchema, updateProductSchema, findOneProductSchema };
