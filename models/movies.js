/**
 * Created by TOTO on 1/15/16.
 */

"use strict";
var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes){
  var Movie = sequelize.define('Movie', {
    movie: Sequelize.STRING,
    director: Sequelize.STRING,
    description: Sequelize.TEXT
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Movie.belongsTo(models.User);
      }
    },
    hooks: {
      beforeCreate: function (movie, options) {
        movie.createdAt = new Date();
        movie.updatedAt = new Date();
      },
      beforeUpdate: function (movie, options, fn) {
        movie.updatedAt = new Date();
      }
    }
  });
  return Movie;
};
