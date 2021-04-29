//QUERY SELECTORS

const question = document.querySelector('#question')
const answersDiv = document.querySelector('#answers')
const answerA = document.querySelector('#answer-a')
const answerB = document.querySelector('#answer-b')
const answerC = document.querySelector('#answer-c')
const answerD = document.querySelector('#answer-d')
const scoreBoard = document.querySelector('#score')
const correctAnswer = document.querySelector('.correct')
const game = document.querySelector('#game')
const resetButton = document.querySelector('#reset-button')

//QUESTION NUMBER
let questionNumber = 0

//CURRENT SCORE
let score = 0

//QUESTION ARRAY
const questions = ['here is where a question might go. what is the answer?', 'Question 2', 'This is a test', 'Pick answer 4']

//ANSWER ARRAYS
const aAnswers = ["pick me, I'm the answer!<div class=\"correct\"></div>", '2A','test','answer 4']
const bAnswers = ["3.14159", '2B<div class=\"correct\"></div>','test','answer 4']
const cAnswers = ["Des Moines", '2C','test<div class=\"correct\"></div>','answer 4']
const dAnswers = ["A is being ridiculous, the answer is ____", '2D','test','answer 4<div class=\"correct\"></div>']

//CALLBACK FUNCTIONS
const nextQuestion = () => {
    questionNumber++

    if(aAnswers[questionNumber] == undefined) {
        questionNumber = 0
        score = -1
        finishGame()
    }

    question.innerHTML = questions[questionNumber]
    answerA.innerHTML = `A) ${aAnswers[questionNumber]}`
    answerB.innerHTML = `B) ${bAnswers[questionNumber]}`
    answerC.innerHTML = `C) ${cAnswers[questionNumber]}`
    answerD.innerHTML = `D) ${dAnswers[questionNumber]}`
}

const incrementScore = () => {

    score++
    scoreBoard.innerText = `SCORE: ${score}`

}

const finishGame = () => {
    game.style.display = 'none'
}

const resetGame = () => {
    questionNumber = -1
    score = -1
    incrementScore()
    nextQuestion()
    game.style.display = ''
}


//EVENT LISTENERS
answersDiv.addEventListener('click', (event) => {


    if (event.target.classList.contains('answer-item')) {
        if (event.target.children.length != 0) {
            nextQuestion()
            incrementScore()
        } else {
            nextQuestion()
        }
    }
})

resetButton.addEventListener('click', () => {
    resetGame()
})