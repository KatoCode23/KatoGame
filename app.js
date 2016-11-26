var app = angular.module('app', []);

app.controller('myController', function($scope) {
  $scope.currentCategory = {name: "none"};
  $scope.currentExercise = "none";
  $scope.heightSquared = 0;
  $scope.bmiWeight = 0;
  $scope.answer = 0;
  $scope.currentResponse = "none";
  $scope.currentMuscle = {name: "none"};
  $scope.currentLevel = {name: "none"};
    // ---------- Start code here ----------
  $scope.buttonList = [
    {
      name: 'Weightloss',
      subname: 'Consume less calories then you burn dummy',
      color: 'purple',
      exercises: [
        {name: 'Diet', description: 'Calories in Calories Out.'},
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

    {
      name: 'legs',
      beginner: [
        {name: 'BodyWeight Squats'},
        {name: 'BodyWeight Lunges'},
        {name: 'BodyWeight Side Lunges'}
      ],
      intermediate: [
        {name: 'BodyWeight Jump Squats'},
        {name: 'BodyWeight Jump Lunges'},
        {name: 'BodyWeight Skater Jumps'}
      ],
      advanced: [
        {name: 'Smith Machine Squats'},
        {name: 'Smith Machine Lunges'},
        {name: 'Machine Leg Press'},
        {name: 'Kettle Bell Squats'},
        {name: 'Machine Adductors'},
        {name: 'Machine Abductors'},
        {name: 'Machine Calf Raises'}
      ],
      kato: [
        {name: 'Weighted Barbell Squats'},
        {name: 'Weighted Barbell Lunges'},
        {name: 'Weighted Barbell Front Squats'},
        {name: 'Weighted Barbell Step Ups'},
        {name: 'Weighted Dumbbell Step Ups'},
        {name: 'Deadlifts'},
        {name: 'Straight Leg Deadlifts'},
        {name: 'Weighted Dumbbell Squats'},
        {name: 'Weighted Dumbbell Lunges'},
        {name: 'Weighted Barbell Calf Raises'},
        {name: 'Weighted Dumbbell Calf Raises'}
      ]
    },
    {
      name: 'chest',
      beginner: [
        {name: 'Knee Push Ups'},
        {name: 'Regular Push Ups'},
        {name: 'Diamond Push Ups'},
        {name: 'Wide Push Push Ups'},
        {name: 'Inclined Push Ups'}
      ],
      intermediate: [
        {name: 'Jump Push Ups'},
        {name: '5 Second Push Ups'},
        {name: 'Jump and Clap Push Ups'}
      ],
      advanced: [
        {name: 'One Arm Push Ups'},
        {name: 'Smith Machine BenchPress'},
        {name: 'Smith Machine Incline BenchPress'},
        {name: 'Smith Machine Decline BenchPress'},
        {name: 'Free Range of Motion Cable Fly'},
        {name: 'Light 12-15 Rep Dumbbell BenchPress'},
        {name: 'Light 12-15 Rep Dumbbell Incline BenchPress'},
        {name: 'Light 12-15 Rep Dumbbell Decline BenchPress'},
        {name: 'Light 12-15 Rep Dumbbell Fly'},
        {name: 'Light 12-15 Rep Dumbbell Incline Fly'},
        {name: 'Light 12-15 Rep Dumbbell Decline Fly'},
        {name: 'Light 12-15 Rep Dumbbell BenchPress with a Twist at the Top of Each Rep'},
        {name: 'Light 12-15 Rep Dumbbell Incline BenchPress with a Twist at the Top of Each Rep'},
        {name: 'Light 12-15 Rep Dumbbell Decline BenchPress with a Twist at the Top of Each Rep'}
      ],
      kato: [
        {name: 'Barbell BenchPress'},
        {name: 'Barbell Incline BenchPress'},
        {name: 'Barbell Decline BenchPress'},
        {name: 'Free Range of Motion Cable Incline Fly'},
        {name: 'Heavy 6-10 Rep Dumbbell BenchPress'},
        {name: 'Heavy 6-10 Rep Dumbbell Incline BenchPress'},
        {name: 'Heavy 6-10 Rep Dumbbell Decline BenchPress'},
        {name: 'Heavy 6-10 Rep Dumbbell Fly'},
        {name: 'Heavy 6-10 Rep Dumbbell Incline Fly'},
        {name: 'Heavy 6-10 Rep Dumbbell Decline Fly'},
        {name: 'Heavy 6-10 Rep Dumbbell BenchPress with a Twist at the Top of Each Rep'},
        {name: 'Heavy 6-10 Rep Dumbbell Incline BenchPress with a Twist at the Top of Each Rep'},
        {name: 'Heavy 6-10 Rep Dumbbell Decline BenchPress with a Twist at the Top of Each Rep'}
      ]
    },
    {
      name: 'back',
      beginner: [
        {name: 'Knee Push Ups'},
        {name: 'Regular Push Ups'},
        {name: 'Diamond Push Ups'},
        {name: 'Wide Push Push Ups'},
        {name: 'Inclined Push Ups'}
      ],
      intermediate: [
        {name: 'Resistance Assisted Pull Ups'},
        {name: 'Resistance Assisted Chin Ups'},
        {name: 'Pull Ups'},
        {name: 'Pull Up Assist Machine'}
      ],
      advanced: [
        {name: 'Pull Ups'},
        {name: 'Chin Ups'},
        {name: 'Hyperextensions'},
        {name: 'Light 12-15 Rep Lat Pull Downs'},
        {name: 'Light 12-15 Rep Reverse Grip Lat Pull Downs'},
        {name: 'Light 12-15 Rep Close Grip Lat Pull Downs'},
        {name: 'Light 12-15 Rep Seated Rows'},
        {name: 'Light 12-15 Rep Angled Seated Rows'},
        {name: 'Light 12-15 Rep '},
        {name: 'Light 12-15 Rep Dumbbell Fly'},
        {name: 'Light 12-15 Rep Dumbbell Incline Fly'},
        {name: 'Light 12-15 Rep Dumbbell Decline Fly'},
        {name: 'Light 12-15 Rep Dumbbell BenchPress with a Twist at the Top of Each Rep'},
        {name: 'Light 12-15 Rep Dumbbell Incline BenchPress with a Twist at the Top of Each Rep'},
        {name: 'Light 12-15 Rep Dumbbell Decline BenchPress with a Twist at the Top of Each Rep'}
      ],
      kato: [
        {name: 'Barbell BenchPress'},
        {name: 'Barbell Incline BenchPress'},
        {name: 'Barbell Decline BenchPress'},
        {name: 'Free Range of Motion Cable Incline Fly'},
        {name: 'Heavy 6-10 Rep Dumbbell BenchPress'},
        {name: 'Heavy 6-10 Rep Dumbbell Incline BenchPress'},
        {name: 'Heavy 6-10 Rep Dumbbell Decline BenchPress'},
        {name: 'Heavy 6-10 Rep Dumbbell Fly'},
        {name: 'Heavy 6-10 Rep Dumbbell Incline Fly'},
        {name: 'Heavy 6-10 Rep Dumbbell Decline Fly'},
        {name: 'Heavy 6-10 Rep Dumbbell BenchPress with a Twist at the Top of Each Rep'},
        {name: 'Heavy 6-10 Rep Dumbbell Incline BenchPress with a Twist at the Top of Each Rep'},
        {name: 'Heavy 6-10 Rep Dumbbell Decline BenchPress with a Twist at the Top of Each Rep'}
      ]
    },
    {
      name: 'shoulders'
    },
    {
      name: 'arms'
    },
    {
      name: 'abs'
    },
    {
      name: 'flexibility'
    },
    {
      name: 'cardio'
    }
  ];

  $scope.traineeLevel = [
    {name: 'beginner'},
    {name: 'intermediate'},
    {name: 'advanced'},
    {name: 'kato'}
  ]

  console.log($scope.workouts);

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

  $scope.pickMuscleGroup = function (muscle) {
    $scope.currentMuscle = muscle;
    console.log(muscle);
  }

  $scope.levelOfTraining = function (ready){
    $scope.currentLevel = ready;
    console.log(ready);
  }

});
