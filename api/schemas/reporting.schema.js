const Joi = require('joi');

const clientName = Joi.string().allow(null).optional();
const startDate = Joi.date();
const endDate = Joi.date();

const GetReporting = Joi.object({
    clientName: clientName,
    startDate: startDate.required(),
    endDate: endDate.required(),
});

module.exports = { GetReporting }