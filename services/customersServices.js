const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');


class CustomersService {

  constructor(){}

  async create(data) {

    const response = await models.Customer.create(data,{
      include: ['user']
    });
    return response;
  };

  async find() {
    const response = await models.Customer.findAll({
      include: ['user']
    });
    return response;
  };

  async findOne(id) {
    const response = await models.Customer.findByPk(id);
    if (!response) {
      throw boom.notFound('Service not found');
    }
    return response;
  };


  async update(id,changes) {
    const response = await this.findOne(id);
    await response.update(changes);
    return {
      message: "successfully updated",
      id: response.id,
      ...changes
    }
  };

  async delete(id) {
    const response = await this.findOne(id);
    await response.destroy();
    return {
      message: "successfully deleted",
      id: id
    }
  };
};

module.exports = CustomersService;
