//This function takes one parameter using jquery that takes in a string.
function writeToWeightLoss(message){
  $("#weightloss-list").append("<div>" + message + "</div>");
}

var weightlossArray = ["Jogging", "Sprinting", "Boxing", "Swimming", "Jumproping", "Walking"];
for (var i=0; i < weightlossArray.length; i ++){
  writeToWeightLoss(weightlossArray[i]);

}
function writeToGainMuscle(message){
  $("#gainmuscle-list").append("<div>" + message + "</div>");
}

var gainMuscleArray = ["Squat", "Deadlift", "BenchPress", "MilitaryPress", "Pull-Ups", "Push-Ups"];
for (var i=0; i < gainMuscleArray.length; i ++){
  writeToGainMuscle(gainMuscleArray[i]);

}

/*var workoutListArray = [[weightlossArray],[gainMuscleArray]];
function whichWorkoutList(list,message){
  for (var i = 0; i < workoutListArray; )


}*/
