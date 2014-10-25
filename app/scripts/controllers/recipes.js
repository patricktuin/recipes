'use strict';

/**
 * @ngdoc function
 * @name recipesApp.controller:RecipesCtrl
 * @description
 * # RecipesCtrl
 * Controller of the recipesApp
 */
angular.module('recipesApp')
  .controller('RecipesCtrl', function ($scope, $http, $location) {

  	var API = 'http://127.0.0.1:3000';

  	$scope.getRecipes = function (){
	$http.get(API)
		.success(function(data) {
			$scope.recipes = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	$scope.addRecipe = function(){
	$http.post(API, $scope.formData)
		.success(function(data) {
			$scope.recipes = data;
			$scope.formData = {};
			// $location.path('#/recipes');
			// console.log($scope.formData);
		})
		.error(function(data) {
			console.log('Error: ' + data);
			// console.log($scope.formData);
		});
	};

	$scope.deleteRecipe = function(id){
	$http.delete(API + '/' + id)
		.success(function(data){
			$scope.recipes = (data);
			console.log('success');
		})
		.error(function(data){
			console.log('error');
			console.log(data);

		});
	};

  });
