$(document).ready(function(){


  var secondsCounter = 0;
  var timerInterval;
  var checkTimer;
  var imageCounter = 0;

  $("#startStopBtn").on("click", function(e) {
    e.preventDefault();
    if (this.getAttribute("data-state") === "start") {
      //alert("this works");
      $("#startStopBtn").attr("data-state", "stop");
      $("#startStopBtn").html("Click To Stop");
      imageCounter = 0;
      secondsCounter = 0;
      //a timer is started and secondsCounter is incremented every second
      timerInterval = setInterval(incrementTimer, 1000);
      //the secondsCounter is checked every second
      checkTimer = setInterval(checkSecondsCounter, 1000);
      //if a button is clicked increment the image counter
      $(".btn-lg").on("click", function(e) {
        e.preventDefault();
        //if the image has been clicked do not count it
        if (this.getAttribute("data-state") === "notclicked"){
          imageCounter++;
          $(this).attr("data-state", "clicked");
          alert("the counter is " + imageCounter);
        }
        else {
          alert("the button has been clicked");
        }
      });
    }
    else if (this.getAttribute("data-state") === "stop"){
      //removes the event handler from the buttons
      $(".btn-lg").off("click");
      $("#startStopBtn").attr("data-state", "start");
      $("#startStopBtn").html("Click To Start");
      //the timer is stopped and secondsCounter set to zero
      clearInterval(timerInterval); 
      clearInterval(checkTimer);
      secondsCounter = 0;
    }


    function incrementTimer() { 
      secondsCounter++;
     }

    //checks secondsCounter, if >= 20 seconds it ends the game
    function checkSecondsCounter() {
      if (secondsCounter >= 20 ) {
        $("#startStopBtn").attr("data-state", "start");
        $("#startStopBtn").html("Click To Start");
        clearInterval(timerInterval); 
        clearInterval(checkTimer);
        $(".btn-lg").off("click");
        alert("Time is up " + secondsCounter + " seconds");
      } 
    }


});








});