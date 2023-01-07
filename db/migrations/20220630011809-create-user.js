'use strict';

const { USER_TABLE } = require('../models/userModel');
const { DataTypes, Sequelize } = require('sequelize');
const { ServiceSchema, SERVICE_TABLE } = require('../models/serviceModel');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      },
    });
    await queryInterface.createTable(SERVICE_TABLE, ServiceSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(SERVICE_TABLE);
  }
};
