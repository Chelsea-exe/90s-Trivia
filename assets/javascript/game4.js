/*
setting up variables for the start up/intro screen of the quiz and container 
of the quiz to appear once start button has been clicked and timer has started
let startButton = document.getElementById('start-btn')
let quizIntro = document.getElementById('Intro')
let quizContainer = document.getElementById('Container')

function hideForm ()
startButton.addEventListener('click', startGame)
function startGame() {
    console.log('Game has started')
}

*/
$(document).ready(function() {
    $('#Container').hide();
    $('#start-btn').on('click', function() {
        $('#Container').toggle();
        $('#Intro').toggle();
        console.log("90's quiz has started!");

    });
});
