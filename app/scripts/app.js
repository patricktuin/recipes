'use strict';

/**
 * @ngdoc overview
 * @name recipesApp
 * @description
 * # recipesApp
 *
 * Main module of the application.
 */
var app = angular.module('recipesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'RecipesCtrl'
      })
      .when('/recipes', {
        templateUrl: 'views/recipes.html',
        controller: 'RecipesCtrl'
      })
      .when('/addrecipe', {
        templateUrl: 'views/addrecipe.html',
        controller: 'RecipesCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
        //controller: 'RecipesCtrl'
      })
      .when('/info', {
        templateUrl: 'views/info.html'
        // controller: 'RecipesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.controller('collapseController', function($rootScope){
    $rootScope.$on('$routeChangeSuccess', function() {
          var toggle = angular.element('.navbar-toggle');
          if (!toggle.hasClass('collapsed')) {
              angular.element('.navbar-collapse').removeClass('in').addClass('collapsed');

          }
    });
  });



  app.controller('TabController', function() {
    this.tab = 'home';

    this.setTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };
  });

