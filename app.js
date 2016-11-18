var app = angular.module('app', []);

app.controller('myController', function($scope){

$scope.categoryList = ['about', 'skills', 'events', 'gratitude', 'gallery', 'words of wisdom', 'favorite things', 'contact'];
$scope.skills = [
  {name: 'International Event Coordination'},
  {name: 'Social Media Strategy'}
];

$scope.categoryClick = function() {
  console.log('Hello there sir Ive just been clicked');
}

});
