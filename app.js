var app = angular.module('app', []);

app.controller('myController', function($scope){

$scope.categoryList = ['about', 'skills', 'events', 'gratitude', 'gallery', 'words of wisdom', 'favorite things', 'contact'];
$scope.currentSkill =  {name: "none"};
$scope.skills = [
  {name: 'International Event Coordination'},
  {name: 'Social Media Strategy'},
  {name: 'Branding Development'},
  {name: 'Wedding Planner'},
  {name: 'Brand Collaboration'},
  {name: 'Fundraisers'},
  {name: 'Cooperate Events, Dinner Parties, Fashion Shows, Premiers'},
  {name: 'Creative Consulting'},
  {name: 'Publicity'},
  {name: 'Photo and Gallery Production'},
  {name: 'Book and Speaking Agent'},
  {name: 'Sponsorship'}
];

$scope.categoryClick = function(menu) {
  $scope.currentSkill = menu;
  console.log(menu);
}

});
