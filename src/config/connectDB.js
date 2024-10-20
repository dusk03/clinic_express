const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('testdb', 'root', 'thang', {
  host: 'localhost',
  dialect:  'mysql',
  logging: false
});

let connetDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = connetDB;