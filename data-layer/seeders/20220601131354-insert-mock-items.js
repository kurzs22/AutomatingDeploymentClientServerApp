'use strict';

const items = [
  {
    id: 'MOCK-1',
    name: 'Mocka',
  },
  {
    id: 'MOCK-2',
    name: 'Cafe',
  },
];

const myenv = process.env.NODE_ENV || 'development';

console.log('>>>> env: >>>>');
console.log(myenv);

module.exports = {
  up: (queryInterface, Sequelize) => {
    if (myenv !== 'production') {
      return queryInterface.bulkInsert('Items', items, {});
    } else return null;
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
    } else return null;
  },
};
