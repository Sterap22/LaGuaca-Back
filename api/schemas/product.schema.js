const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().min(3);
const category = Joi.number().integer();
const price = Joi.number().integer().min(10);
const quantity = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  image: image.required(),
  category: category.required(),
  price: price.required(),
  quantity: quantity.required()
})

const updateProductSchema = Joi.object({
  name: name,
  image: image,
  category: category,
  price: price,
  quantity: quantity
})

const getProductSchema = Joi.object({
  id: id.required(),
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
