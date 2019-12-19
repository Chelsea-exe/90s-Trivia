window.onload = function() {
    event.preventDefault();
    $('#Container').hide();
    $('#start-btn').on('click', function() {
        $('#Container').toggle();
        $('#Intro').hide();
        $('#Score').hide();
        console.log("Quiz has started!");
    });
    $('#submit-btn').on('click', function() {
        Validate();
    })
    function Validate () {
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
            (skit === "The Brady Bunch", skit === "MADTv", skit === "Saturday Night Live");
            alert("Answer #1 is wrong");
        }
        if (girlPower === "Spice Girls") {
            alert("Answer #2 is correct");
        }
        else (girlPower === "TLC", girlPower === "Destiny's Child", girlPower === "Dixie Chicks"); {
            alert("Answer #2 is correct");
        }
        if (boyBand === "AJ, Brian, Nick, Kevin, Howie") {
            alert("Answer #3 is correct");
        }
        else (boyBand === "Justin, JC, Lance, Joey, Chris", boyBand === "Nick, Jeff Drew, Justin", 
        boyBand === "Mark, Travis, Tom"); {
            alert("Answer #3 is wrong");
        }
        if (tvShow === "Martin") {
            alert("Answer #4 is correct");
        }
        else (tvShow === "Moesha", tvShow === "Friends", tvShow === "Sex and The City"); {
            alert("Answer #4 is wrong");
        }
        if (nba === "Chicago Bulls") {
            alert("Answer #5 is correct");
        }
        else (nba === "Houston Rockets", nba === "Los Angeles Lakers", nba === "San Antonio Spurs"); {
            alert("Answer #5 is wrong");
        }
        if (nfl === "New Orleans, Superdome") {
            alert ("Answer #6 is correct");
        }
        else (nfl === "San Diego, Qualcomm Stadium", nfl === "Miami, Joe Robbie Stadium", 
        nfl === "Pasadena, Rose Bowl"); {
            alert("Answer #6 is wrong");
        }
        if (film === "The Titantic") {
            alert("Answer #7 is correct");
        }
        else (film === "The Lion King", film === "Jurrasic Park", film === "The Color Purple"); {
            alert("Answer #7 is wrong");
            return
        }
    }
}