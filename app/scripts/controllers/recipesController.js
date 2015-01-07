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

      $scope.categories = ['BBQ', 'Italiaans', 'Hollands'];

      var onError = function () {
        $scope.error = 'Could not fetch the data. Maybe API problem?';
      };

      var onRecipesComplete = function (data) {
        $scope.recipes = data;
        $scope.success = true;
        $scope.count = data.length;
      };

      var onRecipeComplete = function (data) {
        getCategoriesSelected(data.category);
        $scope.recipe = data;

      };

      var onAddRecipe = function(response){
        if (response.status === 200) {
          $scope.status = true;
          $scope.statusMessage = 'Recept toegevoegd';
          //$location.path('/');
        }
        else {
          $scope.status = false;
          $scope.statusMessage = 'Recept toevoegen niet gelukt';
        }
      };

      var onUpdateRecipeComplete = function (response) {
        if (response.status === 200) {
          $scope.status = true;
          $scope.statusMessage = 'Recept aangepast';
        }
        else {
          $scope.status = false;
          $scope.statusMessage = 'Recept niet aangepast';
        }
        console.log(response.status);
      };

      var onDeleteRecipe = function (response) {
        if (response.status === 200) {
          //$scope.recipes.splice(id, 1);
          console.log(response);
          $scope.status = true;
          $location.path('/');
        }
        else {
          $scope.status = false;
        }
      };

      var splitIngredients = function (ingredients) {
        if (typeof(ingredients) === 'string') {
          ingredients = ingredients.split(',');
          return ingredients;
        }
        else {
          return ingredients;
        }
      };

      var getCategoriesSelected = function (categoriesSelected) {
        $scope.selection = categoriesSelected;
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
        console.log('selected: ' + categoriesSelected);
        console.log('selected: ' + $scope.selection);
        return $scope.selection;
      };

      $scope.getRecipes = function () {
        api.getRecipes().then(onRecipesComplete, onError);
      };

      $scope.getRecipe = function () {
        api.getRecipe($routeParams.id).then(onRecipeComplete, onError);
      };


      $scope.addRecipe = function () {
        $scope.recipe.ingredients = splitIngredients($scope.recipe.ingredients);
        $scope.recipe.category = getCategoriesSelected($scope.recipe.category);
        api.addRecipe($scope.recipe).then(onAddRecipe);
      };

      $scope.updateRecipe = function (id) {
        $scope.recipe.ingredients = splitIngredients($scope.recipe.ingredients);
        $scope.recipe.category = getCategoriesSelected($scope.recipe.category);
        api.updateRecipe(id, $scope.recipe).then(onUpdateRecipeComplete);
      };

      $scope.deleteRecipe = function (id) {
        api.deleteRecipe(id).then(onDeleteRecipe);
      };

      $scope.updateView = function (id) {
        $location.path('/recipes/update/' + id);
      };

    });

})();
