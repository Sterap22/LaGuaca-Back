const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const description = Joi.string().min(8);
const name = Joi.string().min(3);
const state = Joi.boolean();
const userID = Joi.number().integer();
// const role = Joi.string().min(5)

const createContactSchema = Joi.object({
  email: email.required(),
  name : name,
  description: description.required(),
  state: state,
});

const updateContactSchema = Joi.object({
  email: email,
  name : name,
  state: state,
  userID: userID.required()
});

const getContactSchema = Joi.object({
  id: id.required(),
});

module.exports = { createContactSchema, updateContactSchema, getContactSchema }
