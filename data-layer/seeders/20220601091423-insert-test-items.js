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

const myenv = process.env.NODE_ENV || 'development';

console.log('>>>> env: >>>>>');
console.log(myenv);

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (myenv !== 'production') {
      return queryInterface.bulkInsert('Items', items, {});
    }
  },

  down: (queryInterface, Sequelize) => {
    if (myenv !== 'production') {
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
