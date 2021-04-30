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
const startButton = document.querySelector('#start-button')
const startPage = document.querySelector('#start-page')

//QUESTION NUMBER
let questionNumber = 0

//CURRENT SCORE
let score = 0

//QUESTION AND ANSWER OBJECT ARRAY

const qAndAObjects = [
    {
        questionNumber: 1 ,
        question: "Which of these " ,
        answerA: "pick me, I'm the answer!",
        answerB: "3.14159",
        answerC: "Des Moines",
        answerD: "A is being ridiculous, the answer is ____",
        correctAnswer: "pick me, I'm the answer!"
    },    {
        questionNumber: 2 ,
        question: 'Question 2',
        answerA: '2A',
        answerB: '2B',
        answerC: '2C',
        answerD: '2D',
        correctAnswer: '2B'
    },    {
        questionNumber: 3 ,
        question: 'This is a test',
        answerA: 'test',
        answerB: 'test',
        answerC: 'test',
        answerD: 'test',
        correctAnswer: 'test'
    },    {
        questionNumber: 4 ,
        question: 'Pick answer 4' ,
        answerA: 'answer 4',
        answerB: 'answer 4',
        answerC: 'answer 4',
        answerD: 'answer 4',
        correctAnswer: 'answer 4'
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

    question.innerText = qAndAObjects[questionNumber].question
    answerA.innerText = qAndAObjects[questionNumber].answerA
    answerB.innerText = qAndAObjects[questionNumber].answerB
    answerC.innerText = qAndAObjects[questionNumber].answerC
    answerD.innerText = qAndAObjects[questionNumber].answerD
}

const incrementScore = () => {

    score++
    scoreBoard.innerText = `SCORE: ${score}`

}

const startGame = () => {
    startPage.style.display = 'none'
    game.style.display = 'block'
    question.innerText = qAndAObjects[questionNumber].question
    answerA.innerText = qAndAObjects[questionNumber].answerA
    answerB.innerText = qAndAObjects[questionNumber].answerB
    answerC.innerText = qAndAObjects[questionNumber].answerC
    answerD.innerText = qAndAObjects[questionNumber].answerD
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
        console.log(qAndAObjects[questionNumber].correctAnswer)
        console.log(event.target.innerText)
        if (event.target.innerText == qAndAObjects[questionNumber].correctAnswer) {
            nextQuestion()
            incrementScore()
        } else {
            nextQuestion()
        }
    }
})

startButton.addEventListener('click', () => {
    startGame()
})

resetButton.addEventListener('click', () => {
    resetGame()
})