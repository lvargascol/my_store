// const faker = require('community-faker');
const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const { models } = require('../libs/sequelize');

class ProductsService {

  constructor(){
  //   this.generate();
  // }
  // async generate() {
  // const limit = 50;
  // for (let index = 0; index < limit; index++) {
  //   this.products.push({
  //     id: faker.datatype.uuid(),
  //     name: faker.commerce.productName(),
  //     price: parseInt(faker.commerce.price(), 10),
  //     image: faker.image.imageUrl(),
  //     isBlocked: faker.datatype.boolean(),
  //   });
  // };
}

  async create(data) {
    const response = await models.Product.create(data);
    return response;
  };

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    };
    const { limit, offset } = query;
    if ( limit && offset) {
      options.limit = limit;
      options.offset = offset;
    };
    const { price } = query;
    if (price) {
      options.where.price = price;
    };
    const { price_min, price_max } = query;
    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max
      };
    };
    const response = await models.Product.findAll(options);
    return response;
  };

  async findOne(id) {
    const response = await models.Product.findByPk(id, {
      include: ['category']
    });
    if (!response) {
      throw boom.notFound('Not found');
    }
    return response;
  };

  async update(id,changes) {
    const response = await this.findOne(id);
    await response.update(changes);
    return {
      message: "Successfully updated",
      id: response.id,
      ...changes
    };
  };

  async delete(id) {
    const response = await this.findOne(id);
    await response.destroy();
    return {
      message: "Successfully deleted",
      id: id
    };
  };
};

module.exports = ProductsService;
