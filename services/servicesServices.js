  //Usando consultas con sequilize

const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ServicesService {

  constructor(){}

  async create(data) {
    const response = await models.Service.create(data)
    return response;
  };

  async find() {
    const response = await models.Service.findAll();
    return response;
  };

  async findOne(id) {
    const response = await models.Service.findByPk(id);
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




//Usando consultas directa con la BD

//   async create(data) {
//     let { title, category, price, howlong, image, description } = data;
//     const queryID = "SELECT (MAX(ID) + 1) AS ID FROM services";
//     const { rows } = await this.pool.query(queryID);
//     const values = [rows[0].id ,title, category, price, howlong, image, description]
//     const query = "INSERT INTO services (ID, TITLE, CATEGORY, PRICE, HOWLONG, IMAGE, DESCRIPTION) VALUES ($1, $2, $3, $4, $5, $6, $7)";
//     await this.pool.query(query,values);
//     return {
//       id: rows[0].id,
//       ...data
//     }
//   };

//   async find() {
//     const query = 'SELECT * FROM services';
//     const response = await this.pool.query(query);
//     return response.rows;
//   };

//   async findOne(id) {
//     const query = 'SELECT * FROM services where id = $1';
//     const response = await this.pool.query(query, [id]);
//     if (!response.rows[0]) {
//       throw boom.notFound('Service not found');
//     }
//     return response.rows;

//   };

//   async update(id,changes) {
//     const queryID = "SELECT * FROM services where id = $1"
//     const service = await this.pool.query(queryID, [id]);
//     if (!service.rows[0]) {
//       throw boom.notFound('Service not found');
//     }
//     const prop = Object.getOwnPropertyNames(changes);
//     let query;
//     if(prop[0] === 'howlong') {
//       query = "UPDATE services SET " + prop + " = '{ minutes: 00:" + changes.howlong.minutes + ":00 }' WHERE ID = " + id;
//     } else {
//       query = "UPDATE services SET " + prop + " = '" + changes[prop] + "' WHERE ID = " + id;
//     }
//     await this.pool.query(query);
//     return {
//       id: service.rows[0].id,
//       ...changes
//     }

//   };

//   async delete(id) {
//     const queryID = "SELECT * FROM services where id = $1";
//     const service = await this.pool.query(queryID, [id]);
//     const query = 'DELETE FROM services where id = $1';
//     await this.pool.query(query, [id]);
//     if (!service.rows[0]) {
//       throw boom.notFound('Service not found');
//     }

//     return { id };
//   };
// };

module.exports = ServicesService;
