const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
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

class Category extends Model {

  static associate() {
    // associate
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }
};

module.exports = { CATEGORY_TABLE, CategorySchema, Category };
