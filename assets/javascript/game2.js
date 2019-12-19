$(document).ready(function(){
var random = Math.floor()*50+1)

$('#random').text(Random);

var number1 = Math.floor(Math.random()*24+1);
var number2 = Math.floor(Math.random()*24+1);
var number3 = Math.floor(Math.random()*24+1);
var number4 = Math.floor(Math.random()*24+1);

var total = 0;
var wins = 0;
var loses = 0;
$('#Wins').html(Wins);
$('#Losses').html(Losses);

function reset(){
    Random = Math.floor(Math.random()*50+1);
    console.log(Random)
    $('#random').html(Random);
    number1 = Math.floor(Math.random()*24+1);
    number2 = Math.floor(Math.random()*24+1);
    number3 = Math.floor(Math.random()*24+1);
    number4 = Math.floor(Math.randon()*24+1);
    userTotal = 0;
    $('#Totalscore').html(userTotal);

function yes(){
alert("YOU'RE A WINNER!!");
        wins++;
        $('#Wins').html(wins);
        reset();
    }
function welp(){
alert("Welp, a Lose!");
    losses++;
    $('#Losses').html(losses);
    reset()

}
}
})