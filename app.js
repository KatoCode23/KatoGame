var app = angular.module('app', []);

app.controller('myController', function($scope){


  // ---------- Start code here ----------
  $scope.buttonList = ['Weightloss', 'Safety!!', 'Muscle Gain'];
  $scope.weightLossList = ['Diet','Cardio', 'Walking', 'Jogging', 'Running', 'Sprinting', 'Agility Drills', 'Boxing'];
  $scope.muscleGainList = ['Diet', 'Consistent Schedule', 'Lift Safe', 'Lift Heavy', 'Core Lifts'];
  $scope.safeList = ['Warm Up', 'Stretch', 'Form', 'Concentrate'];
  $scope.myLists = [$scope.buttonList, $scope.weightLossList, $scope.muscleGainList, $scope.safeList];

  $scope.assholeClicked = function(){
    console.log("Gotta go train, be back later");
}


});






  /*$scope.myName = "Weightloss";


  $scope.categoryList = function(){
    console.log("You do what Kato tells you to");
  }
  $scope.myButton = "Safety!!"

  $scope.askNoQuestions = function(){
    console.log("Im sorry you said something???");
  }
  $scope.myClass = "Muscle Gain"
  // ---------- End code here ----------

});*/
