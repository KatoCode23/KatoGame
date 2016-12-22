var app = angular.module('app', []);

app.controller('myController', function($scope){

  scope.eleenHalvorsen = [
    {
      name: 'Eric Pringle'
    },
    {
     jobTitle: 'CEO and Founder of the "Give a Glove Foundation"'
    }

  ];

  $scope.menu = [
    {
      category: 'Upcoming Events'
    },
    {
      category: 'Projects'
    },
    {
      category: 'Trivia and Raffle'
    },
    {
      category: 'Testimonials'
    },
    {
      category: 'Gloves Given'
    },
    {
      category: 'Mantra/Mission Statement'
    },

  ];


});
