const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');


class OrdersService {

  constructor(){}

  async create(data) {
    const response = await models.Order.create(data,{
      include: ['customer']
    });
    return response;
  };

  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  };

  async find() {
    const response = await models.Order.findAll();
    return response;
  };

  async findOne(id) {
    const response = await models.Order.findByPk(id,{
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });
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

module.exports = OrdersService;
