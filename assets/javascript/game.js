$("#NE").on("click", function() {
    alert("You're Correct!");
    });
    console.log("You picked New Edition");



var number = 30;

var intervalId;

$("#start").on("click", run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
    number--;
    $("#time").html("<h3>" + number + "</h3>");

    if (number === 0); {
        stop();
        alert("Game Over!");
      }
    }
    function stop() {
        clearInterval(intervalId);
    }
    