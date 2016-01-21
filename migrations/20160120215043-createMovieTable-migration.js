'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Movies',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        movie: {
          type: Sequelize.STRING,
          validate: {
            notNull: true,
            len: [1,200]
          }
        },
        director: {
          type: Sequelize.STRING,
          validate: {
            notNull: true,
            len: [1,120]
          }
        },
        description: {
          type: Sequelize.TEXT,
          validate: {
            notNull: true,
            len: [1,900]
          }
        },
        createdAt: {
          defaultValue: Sequelize.fn('NOW'),
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          defaultValue: Sequelize.fn('NOW'),
          type: Sequelize.DATE,
          allowNull: false
        },
        UserId: Sequelize.INTEGER
      },
      {
        dialect: 'postgres'
      }

    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('Movies');
  }
};
