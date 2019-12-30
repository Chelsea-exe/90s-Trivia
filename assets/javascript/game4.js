var time = 120;
var intervalId;
var answers = ["In Living Color", "Spice Girls", "AJ, Brian, Nick, Kevin & Howie", "Martin", "Chicago Bulls", "New Orleans, Superdome", "The Titanic"];
var answersToGuess = ["The Brady Bunch", "MADTv", "Saturday Night Live", "Destiny's Child", "Spice Girls", "Dixie Chicks", "Justin, JC, Lance, Joey, Chris",
"Nick, Jeff, Drew & Justin", "Mark, Travis & Tom", "Moesha", "Friends", "Sex and The City", "Los Angeles Lakers", "San Antonio Spurs", "Houston Rockets",
"San Diego, Qualcomm Stadium", "Miami, Joe Robbie Statdium", "Pasadena, Rose Bowl", "The Lion King", "Jurrasic Park", "The Color Purple", "In Living Color", 
"Spice Girls", "AJ, Brian, Nick, Kevin & Howie", "Martin", "Chicago Bulls", "New Orleans, Superdome", "The Titanic"];
var guesses = [];
var correct = 0;
var wrong = 0;
window.onload = function() {
    $('#Container').hide();
    $('#start-btn').on('click', function() {
        $('#Container').toggle();
        $('#Intro').hide();
        $('#Score').hide();
        $('#Answers').hide();
        console.log("Quiz has started!");
    });
    $('#start-btn').on('click', function() {
        run();
    })
    function run() {
        console.log("Timer has started");
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        time--;
        $('#Clock').html("<h1>" + time + " " + "SECONDS LEFT" + "</h1>");
        if (time === 0) {
            alert("TIME IS UP, QUIZ IS OVER!!!");
            stop();
            console.log("Timer has stopped!");
        }
    }
    function stop() {
        clearInterval(intervalId);
        console.log("Timer has stopped!!!")
    }
    $('#submit-btn').on('click', function() {
        Validate();
        stop();
    });
    function Validate () {
        var skit = "In Living Color";
        var girlPower = "Spice Girls";
        var boyBand = "AJ, Brian, Nick, Kevin & Howie";
        var tvShow = "Martin";
        var nba = "Chicago Bulls";
        var nfl = "New Orleans, Superdome";
        var film = "Titanic";

        var skit = $('input[name = "skit"]:checked').val();
        console.log("skit!!", skit);
        var girlPower = $('input[name = "GP"]:checked').val();
        console.log(girlPower);
        var boyBand = $('input[name = "BS"]:checked').val();
        console.log(boyBand);
        var tvShow = $('input[name = "catch"]:checked').val();
        console.log(tvShow);
        var nba = $('input[name = "NBA"]:checked').val();
        console.log(nba);
        var nfl = $('input[name = "NFL"]:checked').val();
        console.log(nfl);
        var film = $('input[name = "film"]:checked').val();
        console.log(film);
        responses = [skit, girlPower, boyBand, tvShow, nba, nfl, film];
        for(i = 0; i < responses.length; i++) {
            if (responses[i] === undefined) {
                alert("answer all questions please");
                return
            }
        }
        if (skit === "In Living Color") {
        //    alert("Answer #1 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
            //alert("Answer #1 is wrong = In Living Color");
            wrong++;
            document.querySelector("#wrong").innerHTML = wrong;

        }
        if (girlPower === "Spice Girls") {
          //  alert("Answer #2 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
           // alert("Answer #2 is wrong = Spice Girls");
           wrong++;
           document.querySelector("#wrong").innerHTML = wrong;
        }
        if (boyBand === "AJ, Brian, Nick, Kevin & Howie") {
           // alert("Answer #3 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
         //   alert("Answer #3 is wrong");
         wrong++;
         document.querySelector("#wrong").innerHTML = wrong;
        }
        if (tvShow === "Martin") {
         //   alert("Answer #4 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
         //   alert("Answer #4 is wrong = Martin");
         wrong++;
         document.querySelector("#wrong").innerHTML = wrong;
        }
        if (nba === "Chicago Bulls") {
         //   alert("Answer #5 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
         //   alert("Answer #5 is wrong = Chicago Bulls");
         wrong++;
         document.querySelector("#wrong").innerHTML = wrong;
        }
        if (nfl === "New Orleans, Superdome") {
         //   alert ("Answer #6 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else  {
         //   alert("Answer #6 is wrong = New Orleans, Superdome");
         wrong++;
         document.querySelector("#wrong").innerHTML = wrong;
        }
        if (film === "The Titanic") {
         //   alert("Answer #7 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
         //   alert("Answer #7 is wrong = The Titanic");
         wrong++;
         document.querySelector("#wrong").innerHTML = wrong;
        }
        $('#Score').show();
        $('#quizForm').hide();
        $('#Clock').hide();
        $('#Answers').show();
        $('#submit-btn').hide();
    }
    
}