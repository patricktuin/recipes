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

      var onRecipeComplete = function (data) {
        $scope.recipe = data;
      };

      var onError = function () {
        $scope.error = 'Could not fetch the data. Maybe API problem?';
      };

      $scope.getRecipes = function (id) {
        api.getRecipes(id).then(onRecipesComplete, onError);
      };

      $scope.getRecipe = function (id) {
        api.getRecipe(id).then(onRecipeComplete, onError);
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
