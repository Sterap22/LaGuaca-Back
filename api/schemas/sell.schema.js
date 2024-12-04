const Joi = require('joi');

const id = Joi.number().integer();
const quantity = Joi.number().integer();
const idTable = Joi.number().integer();
const product = Joi.string();
const clientName = Joi.string().min(3);
const idUser = Joi.number().integer();
const state = Joi.boolean();

const createSellSchema = Joi.object({
    id: id,
    quantity: quantity.required(),
    idTable: idTable.required(),
    product: product.required(),
    clientName: clientName.required(),
    idUser: idUser.required(),
    state: state,
});

const updateSellSchema = Joi.object({
    id: id.required(),
    state: state.required()
});

const getSellSchema = Joi.object({
    id: id.required(),
});

module.exports = { createSellSchema, updateSellSchema, getSellSchema }