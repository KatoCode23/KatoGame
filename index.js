
var gainMuscleArray = ["Lift Safe", "Lift Heavy", "Protein", "Core Lifts",];
var safeList = ["Warm Up", "Stretch", "Form", "Concentrate", ];
var weightlossArray = ["Walking", "Running", "Cardio", "Macros", "Swimming", "JumpRope","Circuit", "High-Intensity", "Calories",];
var clientListArray = [];

var state = "none";
$('#gainMuscle').click(function(){
  emptyMyContainer()
  console.log(state);
  if (state === "gainMuscle"){
    emptyMyContainer(true)
  }else if( state != "gainMuscle"){
    for(var i=0; i < gainMuscleArray.length; i++){
      $("#exercise-list").append("<li>" + gainMuscleArray[i] + "<li/>");
      $('h1').css('display', 'block');
    }
    state = "gainMuscle";
  }
});


$('#weightLoss').click(function(){
  emptyMyContainer()
  console.log(state);
  if (state === "weightLoss"){
    emptyMyContainer(true)
  } else if(state != "weightLoss"){
    for(var i=0; i < weightlossArray.length; i++){
      $("#exercise-list").append("<li>" + weightlossArray[i] + "<li/>");
      $('h1').css('display', 'block');
    }
    state = "weightLoss";
  }
});

$('#safety').click(function(){
  emptyMyContainer()
  console.log(state);
  if (state === "safety"){
    emptyMyContainer(true)
  } else if(state != "safety"){
    for(var i=0; i < safeList.length; i++){
      $("#exercise-list").append("<li>" + safeList[i] + "<li/>");
      $('h1').css('display', 'block');
    }
    state= "safety";
  }
});

$('#client-list').click(function(){
  console.log("Yo my DUDE! What are clicking about now?");
})

// Our bitches
function emptyMyContainer(resetState) {
  $("#exercise-list").empty();
  $('h1').css('display', 'none');
  if(resetState === true){
    state = "none";
  }
}
