var app = angular.module('app', []);

app.controller('myController', function($scope){
$scope.currentCategory = "none";

  // ---------- Start code here ----------
  $scope.buttonList = [
    {name: 'Weightloss',
    ready: true,
    exercises: ['Diet','Cardio', 'Walking', 'Jogging', 'Running', 'Sprinting', 'Agility Drills', 'Boxing']
  },
    {name: 'Safety',
    ready: true,
    exercises: ['Warm Up', 'Stretch', 'Form', 'Concentrate']
  },
    {name: 'Muscle Gain',
    ready: true,
    exercises: ['Diet', 'Consistent Schedule', 'Lift Safe', 'Lift Heavy', 'Core Lifts']
    }];







$scope.clickOnCategory = function(button){
$scope.currentCategory = button.name;
console.log(button.name);
}
});
