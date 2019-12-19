var startButton = document.getElementById('start-btn')

var questionContainerElement = document.getElementById('question-container')



var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Game has started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion()

}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {

}

function selectAnswer() {

}

var questions = [
    {
        question: 'Which name of these boy bands were originally formed in the 90s',
        answers: [
            { text: 'Backstreet Boys', correct: true },
            { text: 'One Direction', correct: false },
            { text: 'New Edition', correct: false },
            { text: 'B2K', correct: false }
        ]
    }
]