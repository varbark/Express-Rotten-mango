'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Movies',
      [
        {
          "movie": "Pulp Fiction",
          "director": "Q.T",
          "description": "Good!",
          "createdAt": new Date(),
          "updatedAt": new Date()
        }
      ]
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
