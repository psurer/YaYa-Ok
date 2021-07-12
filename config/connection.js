require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'likeminded',
  process.env.DB_USER,
  process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
}
)

module.exports = sequelize;