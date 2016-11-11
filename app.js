var app = angular.module('app', []);

app.controller('myController', function($scope) {
  $scope.currentCategory = {name: "none"};
  $scope.currentExercise = "none";
  $scope.heightSquared = 0;
  $scope.bmiWeight = 0;
  $scope.answer = 0;
  $scope.currentResponse = "none";
    // ---------- Start code here ----------
  $scope.buttonList = [
    {
      name: 'Weightloss',
      subname: 'Consume less calories then you burn dummy',
      color: 'purple',
      exercises: [
        {name: 'Diet', description: 'Macros'},
        {name: 'Cardio', description: 'Cardiovascular Exercise'},
        {name: 'Walking', description: 'Best form of cardio'},
        {name: 'Jogging', description: 'Great for recovery'},
        {name: 'Running', description: 'Athletics'},
        {name: 'Sprinting', description: 'Super Athletic Training'},
        {name: 'Agility Drills', description: 'Sport Specific'},
        {name: 'Boxing', description: 'My favorite form of cardio'}
      ]
    },
    {
      name: 'Safety',
      subname: 'Dont drink and lift!!!',
      color: 'yellow',
      exercises: [
        {name: 'Warm Up', description: 'Important for blood flow'},
        {name: 'Stretch', description: 'Decreases recovery time and increases mobility'},
        {name: 'Form', description: 'Important to maintain balance'},
        {name: 'Concentrate', description: 'Last line of defense for safety'}
      ]
    },
    {
      name: 'Muscle Gain',
      subname: 'Protein and heavy lifting are the keys',
      color: 'red',
      exercises: [
        {name: 'Diet', description: 'Macros'},
        {name: 'Consistent Schedule', description: 'Most important part of gaining muscle'},
        {name: 'Lift Safe', description: 'Tight grip'},
        {name: 'Lift Heavy', description: 'Want bigger muscles? Get stronger'},
        {name: 'Core Lifts', description: 'BenchPress and Squat'}
      ]
    }
  ];

  var responseList = [
    {name: 'I suggest you choose the weightloss category'},
    {name: 'I suggest you choose the muscle gain category'},
    {name: 'You have your choice of category! Remember SAFETY FIRST'}
  ];

  $scope.workouts = [
    {name: 'beginner', weightClass: 'feather'},
    {name: 'intermediate', weightClass: 'light'},
    {name: 'advanced', weightClass: 'light-heavy'},
    {name: 'kato', weightClass: 'heavy'},
    {name: 'legs'},
    {name: 'chest'},
    {name: 'back'},
    {name: 'shoulders'},
    {name: 'arms'},
    {name: 'abs'},
    {name: 'flexibility'},
    {name: 'cardio'}
  ];

  $scope.clickOnCategory = function(button){
    $scope.currentCategory = button;
    console.log(button);
  }

  $scope.clickOnExercise = function(exercise){
  $scope.currentExercise = exercise.description;
  console.log(exercise.description);
  }

  $scope.calculateBMI = function(){
    var heightSquared = $scope.height * $scope.height;
    var bmiWeight = $scope.weight;
    console.log($scope.heightSquared);
    console.log($scope.bmiWeight);
    console.log($scope.answer);
    $scope.bmi = (bmiWeight / heightSquared  * 703).toFixed(2);
  }

  $scope.chooseResponse = function() {
    if ($scope.bmi <= 19) {
      $scope.response = responseList[1];
    }if($scope.bmi >= 25){
      $scope.response = responseList[0];
    }else if ($scope.bmi > 19 && $scope.bmi < 25) {
      $scope.response = responseList[2];
    }
  };

  $scope.submitForm = function() {
    $scope.calculateBMI();
    $scope.chooseResponse();
  };

  $scope.validateForm = function () {
    if($scope.height > 0 && $scope.weight > 0 && $scope.firstName != "" && $scope.lastname != "" && $scope.age > 0) {
      return true;
    } else {
      return false;
    }
  }
});
