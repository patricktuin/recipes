'use strict';

/**
 * @ngdoc function
 * @name recipesApp.controller:RecipesCtrl
 * @description
 * # RecipesCtrl
 * Controller of the recipesApp
 */
(function () {
  angular.module('recipesApp')
    .controller('RecipesCtrl', function ($scope, api) {

      var onRecipesComplete = function (data) {
        $scope.recipes = data;
      };

      var onError = function () {
        $scope.error = 'Could not fetch the data. Maybe API problem?';
      };

      $scope.getRecipes = function () {
        api.getRecipes().then(onRecipesComplete, onError);
      };

      $scope.addRecipe = function(){
        api.addRecipe($scope.formData);
        $scope.formData = {};
      };

      $scope.deleteRecipe = function (id) {
        api.deleteRecipe(id);
        $scope.recipes.splice(id, 1);
      };


    });

})();
