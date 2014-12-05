'use strict';

(function() {

  var recipes = function($http){

    var getRecipes = function(){
      return $http.get('http://127.0.0.1:3000')
          .then(function(response){
        return response.data;
      });
    };

    return{
      getRecipes: getRecipes
    };
  };

  var module = angular.module('recipesApp');
  module.factory('recipes', recipes);

}());
