$(document).ready(function(){


  var secondsCounter = 0;
  var timerInterval;
  var checkTimer;

  $("#startStopBtn").on("click", function(e) {
    e.preventDefault();
    if (this.getAttribute("data-state") === "start") {
      alert("this works");
      $("#startStopBtn").attr("data-state", "stop");
      $("#startStopBtn").html("Click To Stop");
      //image counter = 0
      secondsCounter = 0;
      //a timer is started and checked every second
      timerInterval = setInterval(incrementTimer, 1000);
      checkTimer = setInterval(checkSecondsCounter, 1000);
    }
    else if (this.getAttribute("data-state") === "stop"){
      alert("the data-state is stop");
      $("#startStopBtn").attr("data-state", "start");
      $("#startStopBtn").html("Click To Start");
      //timer is stopped  / reset
      //image counter is set to zero

    }


    function incrementTimer() { 
      secondsCounter++;
      alert("The timer is " + secondsCounter);
     }

     //checks seconds counter, if >= 20 seconds it ends the game
    function checkSecondsCounter() {
      if (secondsCounter >= 20 ) {
        $("#startStopBtn").attr("data-state", "start");
        $("#startStopBtn").html("Click To Start");
        clearInterval(timerInterval); 
        clearInterval(checkTimer);
        alert("Time is up " + secondsCounter + " seconds");
      } 
    }


});








});