'use strict';

const { UserSchema, USER_TABLE } = require('../models/userModel');
const { ServiceSchema, SERVICE_TABLE } = require('../models/serviceModel');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(SERVICE_TABLE, ServiceSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(SERVICE_TABLE);
  }
};
