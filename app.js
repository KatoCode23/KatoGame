var app = angular.module('app', []);

app.controller('myController', function($scope){
$scope.currentSkill =  {name: "none"};
$scope.categoryList = [
  {name: 'about'},
  {name: 'skills',
    [
     talent: 'International Event Coordination',
     talent: 'Social Media Strategy',
     talent: 'Branding Development',
     talent: 'Wedding Planner',
     talent: 'Brand Collaboration',
     talent: 'Fundraisers',
     talent: 'Cooperate Events, Dinner Parties, Fashion Shows, Premiers',
     talent: 'Creative Consulting',
     talent: 'Publicity',
     talent: 'Photo and Gallery Production',
     talent: 'Book and Speaking Agent',
     talent: 'Sponsorship'
   ]
 },
  {name: 'events'},
  {name: 'gratitude'},
  {name: 'gallery'},
  {name: 'words of wisdom'},
  {name: 'favorite things'},
  {name: 'contact'}
];


$scope.categoryClick = function(menu) {
  $scope.currentSkill = menu;
  console.log(menu);
}

});
