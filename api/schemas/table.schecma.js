const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const state = Joi.boolean();

const createTable = Joi.object({
    name: name.required(),
    state: state
});

const updateTable = Joi.object({
    id: id.required(),
    state: state.required()
});

const getTable = Joi.object({
    id: id.required()
});


module.exports = { createTable, updateTable, getTable }