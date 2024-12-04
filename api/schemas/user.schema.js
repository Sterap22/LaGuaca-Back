const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const state = Joi.boolean();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  state: state,
});

const updateUserSchema = Joi.object({
  email: email,
  password: password,
  state: state,
});

const loginUserSchema = Joi.object({
  email: email.required(),
  password: password.required()
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { loginUserSchema, createUserSchema, updateUserSchema, getUserSchema }
