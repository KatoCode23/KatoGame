var app = angular.module('app', []);

app.controller('myController', function($scope){
$scope.currentCategory = "";

$scope.categoryList = [
  {name: 'about'},
  {name: 'skills', talent: [
  {name: 'International Event Coordination'},
  {name: 'Social Media Stradegy'}
]},
  {name: 'events'},
  {name: 'gratitude'},
  {name: 'gallery'},
  {name: 'words of wisdom'},
  {name: 'favorite things'},
  {name: 'contact'}
];


$scope.categoryClick = function(){
  console.log();

}

});
