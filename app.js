var app = angular.module('app', []);

app.controller('myController', function($scope){
$scope.currentCategory = "none";
$scope.currentExercise = "none";

  // ---------- Start code here ----------
  $scope.buttonList = [
    {name: 'Weightloss',
    ready: true,
    exercises: [{name: 'Diet', available: true, description: 'Macros'},
    {name: 'Cardio', available: true, description: 'Cardiovascular Exercise'},
    {name: 'Walking', available: true, description: 'Best form of cardio'},
    {name: 'Jogging', available: true, description: 'Great for recovery'},
    {name: 'Running', available: true, description: 'Athletics'},
    {name: 'Sprinting', available: true, description: 'Super Athletic Training'},
    {name: 'Agility Drills', available: true, description: 'Sport Specific'},
    {name: 'Boxing', available: true, description: 'My favorite form of cardio'}]
  },
    {name: 'Safety',
    ready: true,
    exercises: [{name: 'Warm Up', available: true, description: 'Important for blood flow'},
    {name: 'Stretch', available: true, description: 'Decreases recovery time and increases mobility'},
    {name: 'Form', available: true, description: 'Important to maintain balance'},
    {name: 'Concentrate', available: true, description: 'Last line of defense for safety'}]
  },
    {name: 'Muscle Gain',
    ready: true,
    exercises: [{name: 'Diet', available: true, description: 'Macros'},
    {name: 'Consistent Schedule', available: true, description: 'Most important part of gaining muscle'},
    {name: 'Lift Safe', available: true, description: 'Tight grip'},
    {name: 'Lift Heavy', available: true, description: 'Want bigger muscles? Get stronger'},
    {name: 'Core Lifts', available: true, description: 'BenchPress and Squat'}]
    }];







$scope.clickOnCategory = function(button){
$scope.currentCategory = button.name;
console.log(button.name);
}

$scope.clickOnExercise = function(exercise){
$scope.currentExercise = exercise.description;
console.log(exercise.description);
}
});
