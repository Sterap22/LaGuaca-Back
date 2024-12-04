const { models } = require('../libs/sequelize');
const bcrypt = require('bcrypt')
const boom = require('@hapi/boom');

class UserService {

  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10)
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const user = await models.User.findAll({
      attributes: { exclude: ['password'] }
    });
    delete user.password;
    return user;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found')
    }
      return user;
  }

  async findByEmail(email) {
    const user = await models.User.findOne({
      where: {
        email: email.toLowerCase().trim()
      }
    });
    if (!user) {
      throw boom.notFound('User not found')
    }
      return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    if (!user) {
      throw  boom.notFound('User not found')
    }else{
      return rta;
    }
  }

  async delete(id) {
    const user = await this.findOne(id);
    if (!user) {
     throw boom.notFound('User not found')
    }
    await user.destroy();
    return user;
  }
}

module.exports = UserService;
