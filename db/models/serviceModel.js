const { Model, DataTypes } = require('sequelize');

const SERVICE_TABLE = 'services';

const ServiceSchema = {
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

class Service extends Model {

  static associate() {
    // associate
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: SERVICE_TABLE,
      modelName: 'Service',
      timestamps: false
    }
  }
};

module.exports = { SERVICE_TABLE, ServiceSchema, Service };
