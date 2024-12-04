const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');
const SedntService = require('./sends.services');

const services = new SedntService()

class ContactService {

  constructor() {}

  async create(data) {
    const rtaMail = await services.sendEmail(data.email,'contactUs');
    if (!rtaMail) {
      throw boom.notFound('Send not found')
    }
    const newContact = await models.Contact.create(data);
    return newContact;
  }

  async find() {
    const rta = await models.Contact.findAll();
    return rta;
  }

  async findOne(id) {
    const contact = await models.Contact.findByPk(id);
    if (!contact) {
      throw boom.notFound('Contact not found')
    }
      return contact;
  }

  async update(id, changes) {
    const contact = await this.findOne(id);
    const rta = await contact.update(changes);
    if (!contact) {
      throw  boom.notFound('Contact not found')
    }else{
      return rta;
    }
  }

  async delete(id) {
    const contact = await this.findOne(id);
    if (!contact) {
     throw boom.notFound('Contact not found')
    }
    await contact.destroy();
    return contact;
  }
}

module.exports = ContactService;
