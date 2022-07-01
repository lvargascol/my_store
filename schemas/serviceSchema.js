const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().min(3).max(45);
const category = Joi.string().min(3).max(25);
const price = Joi.number().integer().min(1000);
const minutes = Joi.number().integer().min(5).max(300);
const image = Joi.string().uri();
const description = Joi.string();


const createServiceSchema = Joi.object({
  title: title.required(),
  category: category.required(),
  price: price.required(),
  minutes: minutes.required(),
  image: image.required(),
  description: description
});

const updateServiceSchema = Joi.object({
  title: title,
  category: category,
  price: price,
  minutes: minutes,
  image: image,
  description: description
});

const findOneServiceSchema = Joi.object({
  id: id.required()
});

module.exports = { createServiceSchema, updateServiceSchema, findOneServiceSchema };
