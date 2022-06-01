'use strict';

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

const env = process.env.NODE_ENV || 'development';

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (env !== 'production') {
      return queryInterface.bulkInsert('Items', items, {});
    }
  },

  down: (queryInterface, Sequelize) => {
    if (env !== 'production') {
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
