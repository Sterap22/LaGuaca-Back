const { User, UserSchema } = require('./user.model');
const { UserInformation, InformationSchema } = require('./userInformation.model');
const { TemplateSchema, Template } = require('./template.model');
const { ContactSchema, Contact } = require('./userContact.model');
const { SellSchema, Sell } = require('./sell.model');
const { Category, CategorySchema } = require('./category.model');
const { SellType, SellTypeSchema } = require('./sellType.model');
const { Product, ProductSchema } = require('./product.model');
const { DetailSell, DetailSellSchema } = require('./detailSell.model');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  UserInformation.init(InformationSchema, UserInformation.config(sequelize));
  Template.init(TemplateSchema, Template.config(sequelize));
  Contact.init(ContactSchema, Contact.config(sequelize));
  Sell.init(SellSchema, Sell.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  SellType.init(SellTypeSchema, SellType.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  DetailSell.init(DetailSellSchema, DetailSell.config(sequelize));
}

module.exports = setupModels;
