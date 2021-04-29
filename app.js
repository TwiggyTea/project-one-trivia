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

//QUESTION AND ANSWER OBJECT ARRAY

const qAndAObjects = [
    {
        questionNumber: 1 ,
        question: 'here is where a question might go. what is the answer?',
        answerA: "pick me, I'm the answer!<div class=\"correct\"></div>",
        answerB: "3.14159",
        answerC: "Des Moines",
        answerD: "A is being ridiculous, the answer is ____",
        correctAnswer: "pick me, I'm the answer!<div class=\"correct\"></div>"
    },    {
        questionNumber: 2 ,
        question: 'Question 2',
        answerA: '2A',
        answerB: '2B<div class=\"correct\"></div>',
        answerC: '2C',
        answerD: '2D',
        correctAnswer: '2B<div class=\"correct\"></div>'
    },    {
        questionNumber: 3 ,
        question: 'This is a test',
        answerA: 'test',
        answerB: 'test',
        answerC: 'test<div class=\"correct\"></div>',
        answerD: 'test',
        correctAnswer: 'test<div class=\"correct\"></div>'
    },    {
        questionNumber: 4 ,
        question: 'Pick answer 4' ,
        answerA: 'answer 4',
        answerB: 'answer 4',
        answerC: 'answer 4',
        answerD: 'answer 4<div class=\"correct\"></div>',
        correctAnswer: 'answer 4<div class=\"correct\"></div>'
    }
]

//CALLBACK FUNCTIONS
const nextQuestion = () => {
    questionNumber++

    if(qAndAObjects[questionNumber] == undefined) {
        questionNumber = 0
        score = -1
        finishGame()
    }

    question.innerHTML = qAndAObjects[questionNumber].question
    answerA.innerHTML = `A) ${qAndAObjects[questionNumber].answerA}`
    answerB.innerHTML = `B) ${qAndAObjects[questionNumber].answerB}`
    answerC.innerHTML = `C) ${qAndAObjects[questionNumber].answerC}`
    answerD.innerHTML = `D) ${qAndAObjects[questionNumber].answerD}`
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