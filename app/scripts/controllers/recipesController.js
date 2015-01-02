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
    .controller('RecipesCtrl', function ($scope, api, $routeParams) {

      var onRecipesComplete = function (data) {
        $scope.recipes = data;
      };

      var onRecipeComplete = function (data) {
        $scope.recipe = data;
      };

      var onError = function () {
        $scope.error = 'Could not fetch the data. Maybe API problem?';
      };

      $scope.getRecipes = function () {
        api.getRecipes().then(onRecipesComplete, onError);
      };

      $scope.getRecipe = function () {
        api.getRecipe($routeParams.id).then(onRecipeComplete, onError);
      };

      $scope.addRecipe = function(){
        api.addRecipe($scope.recipe);
        $scope.recipe = {};
      };

      $scope.updateRecipe = function(id){
        console.log('contreoller update ' + id);
        api.updateRecipe(id, $scope.recipe);
      };

      $scope.deleteRecipe = function (id) {
        api.deleteRecipe(id);
        $scope.recipes.splice(id, 1);
      };


    });

})();
