var app = angular.module('app', []);

app.controller('myController', function($scope){
$scope.currentCategory = {name: "none"};
$scope.categoryList = [
  {name: 'about'},
  {name: 'skills',
      talent: ['International Event Coordination',
      'Social Media Strategy',
      'Branding Development',
      'Wedding Planner',
      'Brand Collaboration',
      'Fundraisers',
      'Cooperate Events, Dinner Parties, Fashion Shows, Premiers',
      'Creative Consulting',
      'Publicity',
      'Photo and Gallery Production',
      'Book and Speaking Agent',
      'Sponsorship']
},
  {name: 'events'},
  {name: 'gratitude'},
  {name: 'gallery'},
  {name: 'words of wisdom'},
  {name: 'favorite things'},
  {name: 'contact'}
];


$scope.categoryClick = function() {
  console.log($scope.categoryList.name);

}

});
