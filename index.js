
var gainMuscleArray = ["Lift Safe", "Lift Heavy", "Protein", "Core Lifts",];
var safeList = ["Warm Up", "Stretch", "Form", "Concentrate", ];
var weightlossArray = ["Walking", "Running", "Cardio", "Macros", "Swimming", "JumpRope","Circuit", "High-Intensity", "Calories",];
var clientListArray = [];
var userName
var state = "none";
var States = {gainMuscle: "bigger" , weightLoss: "smaller" , safety: "cleaner"

};


$('#gainMuscle').click(function(){
  emptyMyContainer()
  console.log(state);
  if (States.gainMuscle === state  ){
    emptyMyContainer(true)
  }else if( state != States.gainMuscle){
    for(var i=0; i < gainMuscleArray.length; i++){
      $("#exercise-list").append("<li>" + gainMuscleArray[i] + "<li/>");
      $('h1').css('display', 'block');
    }
    state = States.gainMuscle;
  }
});


$('#weightLoss').click(function(){
  emptyMyContainer()
  console.log(state);
  if (States.weightLoss === state){
    emptyMyContainer(true)
  } else if(state != States.weightLoss){
    for(var i=0; i < weightlossArray.length; i++){
      $("#exercise-list").append("<li>" + weightlossArray[i] + "<li/>");
      $('h1').css('display', 'block');
    }
    state = States.weightLoss;
  }
});

$('#safety').click(function(){
  emptyMyContainer()
  console.log(state);
  if (States.safety === state){
    emptyMyContainer(true)
  } else if(state != States.safety){
    for(var i=0; i < safeList.length; i++){
      $("#exercise-list").append("<li>" + safeList[i] + "<li/>");
      $('h1').css('display', 'block');
    }
    state = States.safety;
  }
});

$('#my-form').submit(function(event){
  event.preventDefault()
  userName = $('#first-name').val()
  userLastName = $('#last-name').val()
  if(userName === "" || userLastName === ""){
    console.log("HUMAN IS SMALL COMPARED TO ME");
  }else{
    $('header')[0].innerHTML = "Hello " + userName + " " + userLastName;
    $('#my-form').hide();
  }
});





// Our bitches
function emptyMyContainer(resetState) {
  $("#exercise-list").empty();
  $('h1').css('display', 'none');
  if(resetState === true){
    state = "none";
  }
}
