'use strict';

angular.module('gitHubTestApp')
  .controller('RepositoryCtrl', function ($scope, $http, $routeParams) {
    $scope.user = $routeParams.user;

    var gitHubUrl = 'https://api.github.com/users/' +  $scope.user + '/repos';

    $scope.getItems = function() {
      $http({method : 'GET',url : gitHubUrl})
        .success(function(data) {
          $scope.repos = data;
        })
        .error(function(data) {
          $scope.errorMessage = data.message;
        });
    };

    $scope.getItems();
  });
