const Joi = require('joi');

const id = Joi.number().integer();
const paid = Joi.boolean();
const customerId = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
  paid: paid.required()
});

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required()
});

const updateOrderSchema = Joi.object({
  paid: paid
});

const findOneOrderSchema = Joi.object({
  id: id.required()
});

module.exports = { createOrderSchema, updateOrderSchema, findOneOrderSchema, addItemSchema };
