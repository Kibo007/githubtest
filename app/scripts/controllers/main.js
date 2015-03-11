'use strict';

/**
 * @ngdoc function
 * @name gitHubTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitHubTestApp
 */
angular.module('gitHubTestApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.setUserToUrl = function(user) {
      $location.path( 'repository/' + user );
    };
  });
