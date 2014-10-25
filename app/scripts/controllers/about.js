'use strict';

/**
 * @ngdoc function
 * @name recipesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the recipesApp
 */
angular.module('recipesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
