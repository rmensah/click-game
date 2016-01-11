$(document).ready(function(){

  var secondsCounter = 0;
  var timerInterval;
  var checkTimer;
  var imageCounter = 0;

  $("#startStopBtn").on("click", function(e) {
    e.preventDefault();
    $(".btn-lg").attr("data-state", "notclicked");
    if (this.getAttribute("data-state") === "start") {
      imageCounter = 0;
      secondsCounter = 0;
      $("#startStopBtn").attr("data-state", "stop");
      $("#startStopBtn").html("Click To Stop");
      //a timer is started and secondsCounter is incremented every second
      timerInterval = setInterval(incrementTimer, 1000); 
      //the secondsCounter is checked every second
      checkTimer = setInterval(checkSecondsCounter, 1000);
      $(".btn-lg").on("click", function(e) {
        e.preventDefault();
        //if the image has not been clicked count it
        if (this.getAttribute("data-state") === "notclicked"){
          imageCounter++;
          $(this).attr("data-state", "clicked");
          alert("the counter is " + imageCounter);
        }
        else {
          $("#clickedModal").modal('show');
        }
      });
    }

    else {
      //removes the event handler from the buttons
      $(".btn-lg").off("click");
      $("#startStopBtn").attr("data-state", "start");
      $("#startStopBtn").html("Click To Start");
      $("#buttonsClickedStop").html(imageCounter);
      $("#stopGameModel").modal('show');
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
        $("#buttonsClicked").html(imageCounter);
        //alert("Time is up " + secondsCounter + " seconds " + "you clicked " + imageCounter + " images");
        $("#endGameModel").modal('show');
      } 
    }
});








});