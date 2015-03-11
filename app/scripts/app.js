'use strict';

angular
  .module('gitHubTestApp', [
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
        controller: 'MainCtrl'
      })
      .when('/repository/:user', {
        templateUrl: 'views/repository.html',
        controller: 'RepositoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
