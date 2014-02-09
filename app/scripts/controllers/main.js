'use strict';

angular.module('dailyPlannerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.events = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
