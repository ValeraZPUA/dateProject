'use strict';
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        firstName: 'Justin',
        lastName: 'Bieber',
        email: 'justin@gmail.com',
        gender: 'man',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        createdAt: new Date(),
        updatedAt: new Date(),
        birthday: moment().subtract(18, 'year').format('YYYY-MM-DD'),
        intention: 'friendship',
        role: 'admin'
      }], {});
  },


  down: (queryInterface, Sequelize) => {
  }
};
