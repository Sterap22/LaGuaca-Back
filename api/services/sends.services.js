const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');
const nodemailer = require('nodemailer');
const { config } = require('../config/config');

// Smtp global config
const transporter = nodemailer.createTransport({
  host: config.hostMail,
  port: config.portMail,
  secure: config.portMail,
  auth: {
    user: config.userMail,
    pass: config.passwordMail,
  }
});

const message = {
  from: config.userMail,
  to: "",
  subject: "",
  text: "",
  html: ``
};


class SedntService {

  constructor() { }

  async sendEmail(mail, template) {
    try {
      const Template = await this.getTemplate(template)
      if (mail !== null) {
        nodemailer.createTestAccount(() => {
          message.to = mail
          message.html = Template.description
          message.subject = "Comunicaciones BrainMeg"

          transporter.sendMail(message, (err) => {
            if (err) {
              throw boom.badRequest('Send Error')
            }
          });

        });
      }
      return true;

    } catch (error) {
      throw boom.badRequest('Send Error')
    }
  }

  async getTemplate(Templatename){
    try {
      const template = await models.Template.findOne({
        where: {
          name: Templatename.toLowerCase().trim()
        }
      });
      if (!template) {
        throw boom.notFound('template not found')
      }
      return template;
    } catch (error) {
      throw boom.badRequest('Get template')
    }
  }
}

module.exports = SedntService;
