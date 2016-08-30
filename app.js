var app = angular.module('app', []);

app.controller('myController', function($scope){

  $scope.assholeClicked = function(){
    console.log('You clicked me bitch!!')
  }

  console.log("Hello from my controller");
  $scope.myName = "Kalen";
});
