angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Learn more Ionic' },
    { title: 'Support tickets' },
    { title: 'Read books' },
    { title: 'Sleep' }
  ];
});
