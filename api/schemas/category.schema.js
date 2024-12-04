const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const state = Joi.boolean();

const createCategorySchema = Joi.object({
    name: name.required(),
});

const getCategory = Joi.object({
    id: id.required()
});

module.exports = { createCategorySchema, getCategory };