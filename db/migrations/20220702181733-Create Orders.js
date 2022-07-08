'use strict';

const { ORDER_TABLE } = require("../models/orderModel");
const { DataTypes, Sequelize } = require('sequelize');
const { CUSTOMER_TABLE } = require('../models/customerModel');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      paid: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        default: false
      },
      customerId: {
        field: 'customer_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        reference: {
          model: CUSTOMER_TABLE,
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
        },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE);
  }
};
