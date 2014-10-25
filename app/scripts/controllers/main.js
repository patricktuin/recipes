'use strict';

/**
 * @ngdoc function
 * @name recipesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipesApp
 */
angular.module('recipesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

