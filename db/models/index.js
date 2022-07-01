const { UserSchema, User } = require('./userModel');
const { CustomerSchema, Customer } = require('./customerModel');
const { ServiceSchema, Service } = require('./serviceModel');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Service.init(ServiceSchema, Service.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
};


module.exports = { setupModels };
