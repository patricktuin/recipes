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
    .controller('RecipesCtrl', function ($scope, api, $routeParams, $location) {

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

      var splitIngredients = function (ingredients) {
        console.log(typeof(ingredients) + ' ' + ingredients);
        ingredients = ingredients.split(",");
        console.log(typeof(ingredients) + ' yep ' + ingredients);
        return ingredients;
      };

      //$scope.clear = function(searchText){
      //  console.log(searchText);
      //  $scope.searchText = '';
      //};







       $scope.categories = ['bbq', 'italiaans', 'hollands'];
      $scope.selection = [];

      $scope.toggleSelection = function toggleSelection(category) {
        var categories = $scope.selection.indexOf(category);

        // is currently selected
        if (categories > -1) {
          $scope.selection.splice(categories, 1);
        }

        // is newly selected
        else {
          $scope.selection.push(category);
        }
      };







      $scope.addRecipe = function (categories) {
        $scope.recipe.ingredients = splitIngredients($scope.recipe.ingredients);
        $scope.recipe.category = categories;
        api.addRecipe($scope.recipe);
        console.log($scope.recipe);
        //$scope.recipe = {};
        //$location.path('/');
      };

      $scope.updateView = function (id) {
        $location.path('/recipes/update/' + id)
      };

      $scope.updateRecipe = function (id, categories) {
        $scope.recipe.ingredients = splitIngredients($scope.recipe.ingredients);
        $scope.recipe.category = categories;
        api.updateRecipe(id, $scope.recipe);
      };

      $scope.deleteRecipe = function (id) {
        api.deleteRecipe(id);
        $scope.recipes.splice(id, 1);
        $location.path('/');
      };


    });

})();
