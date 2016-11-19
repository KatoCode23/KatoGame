var app = angular.module('app', []);

app.controller('myController', function($scope){
$scope.currentCategory = {name: "none"};

$scope.categoryList = [
  {
    name: 'about',
      talent: [
        {name: 'Meet Noel'},
        {name: 'Meet the Team'}
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
   name: 'events',
    talent: [
      {name: 'Audio/Visual'},
      {name: 'Budget Planning'},
      {name: 'Catering Consultation'},
      {name: 'Decor Selection'},
      {name: 'Entertaiment'},
      {name: 'Floral'},
      {name: 'Guest Gifts'},
      {name: 'Hotel Room Blocks'},
      {name: 'Itineraries'},
      {name: 'Invitations'},
      {name: 'Lighting and Sound'},
      {name: 'Onsite Management'},
      {name: 'Photography'},
      {name: 'Program'},
      {name: 'Rentals'},
      {name: 'Transportation'},
      {name: 'Venue Selection & Management'},
      {name: 'Videography'}
    ]
 },
 {
   name: 'gratitude',
    talent: [
      {name: 'clients'}
    ]
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
