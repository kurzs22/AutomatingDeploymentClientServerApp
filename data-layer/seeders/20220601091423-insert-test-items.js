'use strict';

require('dotenv').config()

const items = [
  {
    id: 'FLOWERS-11',
    name: 'Flowers',
  },
  {
    id: 'BEES-8888',
    name: 'Bees',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (process.env.NODE_ENV !== 'production') {
      return queryInterface.bulkInsert('Items', items, {});
    }
  },

  down: (queryInterface, Sequelize) => {
    if (process.env.NODE_ENV !== 'production') {
      return queryInterface.bulkDelete(
        'Items',
        {
          id: { [Sequelize.Op.in]: items.map((item) => item.id) },
        },
        {}
      );
    }
  },
};
