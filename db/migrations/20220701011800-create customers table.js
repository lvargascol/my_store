'use strict';

const { CUSTOMER_TABLE } = require("../models/customerModel");
const { DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./userModel');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'first_name'
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name'
      },
      phone: {
        allowNull: true,
        type: DataTypes.STRING
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        reference: {
          model: USER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
