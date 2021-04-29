//QUERY SELECTORS

const answersDiv = document.querySelector('#answers')
const answerA = document.querySelector('#answer-a')
const answerB = document.querySelector('#answer-b')
const answerC = document.querySelector('#answer-c')
const answerD = document.querySelector('#answer-d')
const scoreBoard = document.querySelector('#score')
const correctAnswer = document.querySelector('.correct')

//QUESTION NUMBER
let questionNumber = 0

//CURRENT SCORE
let score = 0


//ANSWER ARRAYS
const aAnswers = ["A) pick me, I'm the answer!<div class=\"correct\">xxx</div>", '2A','test','answer 4']
const bAnswers = ["B) 3.14159", '2B<div class=\"correct\">xxx</div>','test','answer 4']
const cAnswers = ["C) Des Moines", '2C','test<div class=\"correct\">xxx</div>','answer 4']
const dAnswers = ["D) A is being ridiculous, the answer is ____", '2D','test','answer 4<div class=\"correct\">xxx</div>']

//CALLBACK FUNCTIONS
const nextQuestion = () => {
    questionNumber++

    if(aAnswers[questionNumber] == undefined) {
        questionNumber = 0
        score = -1
        
    }

    answerA.innerHTML = aAnswers[questionNumber]
    answerB.innerHTML = bAnswers[questionNumber]
    answerC.innerHTML = cAnswers[questionNumber]
    answerD.innerHTML = dAnswers[questionNumber]
}

const incrementScore = () => {

    score++
    scoreBoard.innerText = `SCORE: ${score}`

}


//EVENT LISTENERS
answersDiv.addEventListener('click', (event) => {


    if (event.target.classList.contains('answer-item')) {
        if (event.target.children.length != 0) {
            console.log('hello')
            nextQuestion()
            incrementScore()
        } else {
            nextQuestion()
        }
    }
})