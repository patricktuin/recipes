'use strict';

(function () {

  var api = function ($http) {

    var APIurl = 'http://localhost:3000/';

    var getRecipes = function () {
      return $http.get(APIurl)
        .then(function (response) {
          return response.data;
        });
    };

    var getRecipe = function (id) {
      return $http.get(APIurl + id)
        .then(function (response) {
          return response.data;
        });
    };

    var addRecipe = function (recipe) {
      console.log('Post controller' + recipe);
      $http.post(APIurl, recipe)
        .then(function (response) {
          return response.data;
        });
    };

    var deleteRecipe = function (id) {
      console.log('delete controller ' + id);
      $http.delete(APIurl + id)
        .then(function (response) {
          return response.data;
        });
    };

    return {
      getRecipes: getRecipes,
      getRecipe: getRecipe,
      addRecipe: addRecipe,
      deleteRecipe: deleteRecipe
    };
  };

  var module = angular.module('recipesApp');
  module.factory('api', api);

}());
