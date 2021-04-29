const answersDiv = document.querySelector('#answers')
const answerA = document.querySelector('#answer-a')
const answerB = document.querySelector('#answer-b')
const answerC = document.querySelector('#answer-c')
const answerD = document.querySelector('#answer-d')


let questionNumber = 0

const aAnswers = ["A) pick me, I'm the answer!", '2A']
const bAnswers = ["B) 3.14159", '2B']
const cAnswers = ["C) Des Moines", '2C']
const dAnswers = ["D) A is being ridiculous, the answer is ____", '2D']

const nextQuestion = () => {
    questionNumber++

    if(aAnswers[questionNumber] == undefined) {
        questionNumber = 0
    }

    answerA.innerText = aAnswers[questionNumber]
    answerB.innerText = bAnswers[questionNumber]
    answerC.innerText = cAnswers[questionNumber]
    answerD.innerText = dAnswers[questionNumber]
}

answersDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('answer-item')) {
        nextQuestion()
    }
})