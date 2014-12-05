'use strict';

/**
 * @ngdoc function
 * @name recipesApp.controller:RecipesCtrl
 * @description
 * # RecipesCtrl
 * Controller of the recipesApp
 */
angular.module('recipesApp')
  .controller('RecipesCtrl', function ($scope, recipes) {

    $scope.getRecipes = function () {
      recipes.getRecipes()
        .success(function (data) {
          $scope.recipes = data;
   
        })
        .error(function (data) {
          console.log('Error: ' + data);
        });
    };

    var onRecipesComplete = function (data) {
      $scope.recipes = data;
      recipes.getRecipes($scope.recipes).then(onRecipes, onError);
    };

    var onRecipes = function (data) {
      $scope.recipes = data;
    };

    var onError = function () {
      $scope.error = 'Could not fetch the data. Maybe API problem?';
    };

    $scope.getRecipes = function () {
      recipes.getRecipes().then(onRecipesComplete, onError);
    };


  });



//
//
//
//$scope.addRecipe = function () {
//      $http.post(API, $scope.formData)
//        .success(function (data) {
//          $scope.recipes = data;
//          $scope.formData = {};
//          // $location.path('#/recipes');
//          // console.log($scope.formData);
//        })
//        .error(function (data) {
//          console.log('Error: ' + data);
//          // console.log($scope.formData);
//        });
//    };
//
//    $scope.deleteRecipe = function (id) {
//      $http.delete(API + '/' + id)
//        .success(function (data) {
//          $scope.recipes = (data);
//          console.log('success');
//        })
//        .error(function (data) {
//          console.log('error');
//          console.log(data);
//
//        });
//    };
//
//
