var app = angular.module('app', []);

app.controller('myController', function($scope){
$scope.currentCategory = {name: "none"};

$scope.categoryList = [
  {
    name: 'about',
      talent: [
        {name: 'Meet Noel'},
        {name: 'Girl One'},
        {name: 'Girl Two'},
        {name: 'Kalen Norton'}
      ]
  },
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
 },
 {
   name: 'events'
 },
 {
   name: 'gratitude'
 },
 {
   name: 'gallery'
 },
 {
   name: 'words of wisdom'
 },
 {
   name: 'favorite things'
 },
 {
   name: 'contact'
 }
];


$scope.categoryClick = function(menu){
  $scope.currentCategory = menu;
  console.log(menu);
}

});
