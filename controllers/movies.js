var express = require('express');
var router = express.Router();
var Movies = require('../models/movies');
var models  = require('../models');


function getRequest(path, file, parse){
  router.get(path, function(req, res, next) {

    res.render(file, parse);

  });
}

function movieInstance(req) {
  var movieIstance = {
    "movie": req.body.title,
    "director": req.body.director,
    "description": req.body.description
  };
  return movieIstance;
}

function postRequest(path, instanceObject, redirectPath){
  router.post(path, function(req, res){
    var instance = movieInstance(req);
    models.Movie.create(instance).then(function(){
      console.log('Save movie!');
      res.redirect(redirectPath);
    })
  })
}

//Get home page
router.get('/', function(req, res) {
  models.Movie.findAll().then(function(movies){
    res.render('index',{title: 'Rotten Mango', movies: movies});
  });
});
//Get add new movie page
getRequest('/add', 'add', {title: 'Rotten Mango - Add new movie'});
//Post new movie and redirect to index
postRequest('/add', movieInstance, '/');


module.exports = router;
