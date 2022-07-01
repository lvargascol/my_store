const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  minutes: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    defaultValue: ""
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
    defaultValue: ""
  }
};

class Product extends Model {

  static associate() {
    // associate
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
};

module.exports = { PRODUCT_TABLE, ProductSchema, Product };
