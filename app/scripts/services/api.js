'use strict';

(function () {

  var api = function ($http) {

    //var APIurl = 'http://localhost:3000/';
    var APIurl = 'http://www.redthings.nl:3000/';
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
      return $http.post(APIurl, recipe)
        .then(function (response) {
          return response;
        });
    };

    var updateRecipe = function (id, recipe) {
      return $http.put(APIurl + id, recipe)
        .success(function (response) {
          console.log('api.js success ' + response.success);
          return response.success;
        })
        .error(function (response) {
          console.log('api js error' + response.success);
          return response.success;
        });
    };

    var deleteRecipe = function (id) {
      return $http.delete(APIurl + id)
        .success(function (response) {
          console.log('api.js delete success ' + response);
          return response.success;
        })
        .error(function (response) {
          console.log('api js delete error' + response);
          return response.success;
        });
    };

    return {
      getRecipes: getRecipes,
      getRecipe: getRecipe,
      addRecipe: addRecipe,
      deleteRecipe: deleteRecipe,
      updateRecipe: updateRecipe
    };
  };

  var module = angular.module('recipesApp');
  module.factory('api', api);

}());
