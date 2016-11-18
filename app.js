var app = angular.module('app', []);

app.controller('myController', function($scope){
$scope.currentCategory = "";

$scope.categoryList = [
  {name: 'about'},
  {
  name: 'skills',
    talent: [
       {name: 'International Event Coordination'},
       {name: 'Social Media Srategy'},
       {name: 'Branding Development'},
       {name: 'Wedding Planner'},
       {name: 'Brand Colaberation'},
       {name: 'Fundraiser'},
       {name: 'Cooperate Events Dinner Parties Fashion Shows Premiers'},
       {name: 'Creative Consulting'},
       {name: 'Publicity'},
       {name: 'Photo and Gallery Production'},
       {name: 'Book and Speaking Agent'},
       {name: 'Sponsorship'},
     ]
 }
 {
  name: 'International Event Coordination'
 },
 {
   name: 'Social Media Stradegy'}
},
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
