var time = 120;
var intervalId;
window.onload = function() {
    $('#Container').hide();
    $('#start-btn').on('click', function() {
        $('#Container').toggle();
        $('#Intro').hide();
        $('#Score').hide();
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
    }
    $('#submit-btn').on('click', function() {
        Validate();
    })
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
            alert("Answer #1 is correct");
        }
        else {
            alert("Answer #1 is wrong = In Living Color");

        }
        if (girlPower === "Spice Girls") {
            alert("Answer #2 is correct");
        }
        else {
            alert("Answer #2 is wrong = Spice Girls");
        }
        if (boyBand === "AJ, Brian, Nick, Kevin & Howie") {
            alert("Answer #3 is correct");
        }
        else {
            alert("Answer #3 is wrong");
        }
        if (tvShow === "Martin") {
            alert("Answer #4 is correct");
        }
        else {
            alert("Answer #4 is wrong = Martin");
        }
        if (nba === "Chicago Bulls") {
            alert("Answer #5 is correct");
        }
        else {
            alert("Answer #5 is wrong = Chicago Bulls");
        }
        if (nfl === "New Orleans, Superdome") {
            alert ("Answer #6 is correct");
        }
        else  {
            alert("Answer #6 is wrong = New Orleans, Superdome");
        }
        if (film === "The Titanic") {
            alert("Answer #7 is correct");
        }
        else {
            alert("Answer #7 is wrong = The Titanic");
        }
    }
}