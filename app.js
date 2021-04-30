//QUERY SELECTORS

const question = document.querySelector('#question')
const answersDiv = document.querySelector('#answers')
const answerA = document.querySelector('#answer-a')
const answerB = document.querySelector('#answer-b')
const answerC = document.querySelector('#answer-c')
const answerD = document.querySelector('#answer-d')
const scoreBoard = document.querySelector('#score-board')
const correctAnswer = document.querySelector('.correct')
const game = document.querySelector('#game')
const resetButton = document.querySelector('#reset-button')
const startButton = document.querySelector('#start-button')
const startPage = document.querySelector('#start-page')
const lakeScore = document.querySelector('#lake-score')
const riverScore = document.querySelector('#river-score')
const waterfallScore = document.querySelector('#waterfall-score')
const fijiScore = document.querySelector('#fiji-score')
const peeScore = document.querySelector('#pee-score')
const oceanScore = document.querySelector('#ocean-score')
const deepSeaScore = document.querySelector('#deep-sea-score')
const puddleScore = document.querySelector('#puddle-score')
const rainScore = document.querySelector('#rain-score')
const vodkaScore = document.querySelector('#vodka-score')
const seltzerScore = document.querySelector('#seltzer-score')
const iceScore = document.querySelector('#ice-score')
const bloodScore = document.querySelector('#blood-score')

//QUESTION NUMBER
let questionNumber = 0

//PROFILE TRACKER
let profiles = {
    lake: 0,
    river: 0,
    waterfall: 0,
    fiji: 0,
    pee: 0,
    ocean: 0,
    deep_sea: 0,
    puddle: 0,
    rain: 0,
    vodka: 0,
    seltzer: 0,
    ice: 0,
    blood: 0
}
//QUESTION AND ANSWER OBJECT ARRAY

const qAndAObjects = [
    {
        questionNumber: 1 ,
        question: "Would you go skydiving?" ,
        answerA: {
            text: "It's on my bucket list.",
            ocean: 1,
            waterfall: 2,
            deep_sea: 1,
            river: 1
        },
        answerB: {
            text: "Not ever.",
            puddle: 2,
            seltzer: 1,
            pee: 1,
        },
        answerC: {
            text: "I've done it and I love it!",
            waterfall: 3,
            ice: 1,

        },
        answerD: {
            text: "Only if I don't have a parachute.",
            vodka: 2,
            fiji: 1,
            blood: 1
        },
        },   {
        questionNumber: 2 ,
        question: 'Are you afraid of the dark?',
        answerA: {
            text: 'I quite like the dark.',
            deep_sea: 2,
            rain: 1,
            blood: 1,
            waterfall: 1

        },
        answerB: {
            text: 'I\'m not afraid of the dark.',
            lake: 1,
            vodka: 1,
            ice: 1,
            ocean: 2
        },
        answerC: {
            text: 'No!...',
            river: 1,
            puddle: 1,
            fiji: 1

        },
        answerD: {
            text: 'Yeah, haha, I am afraid of the dark.',
            seltzer: 1,
            pee: 1
        }   
        },  
        {
        questionNumber: 3 ,
        question: 'What music do you listen to?',
        answerA: {
            text: 'Music that brings me good memories',
            lake : 2,
            ocean : 2,
            rain: 1,
            seltzer: 1


        },
        answerB: {
            text: 'Music that gets me going!',
            waterfall: 2,
            ice: 1

        },
        answerC: {
            text: 'Music to help me focus',
            river: 2,
            fiji: 1,
            deep_sea: 2,
            rain: 1
        },
        answerD: {
            text: 'Music to dance to',
            pee: 1,
            puddle: 2,
            vodka: 2,
            seltzer: 2,
            blood: 3

        }   
        },  {
        questionNumber: 4 ,
        question: 'What kind of pet would you want?',
        answerA: {
            text: 'I want a dog!',
            lake: 2,
            vodka: 1,
            seltzer: 2

        },
        answerB: {
            text: 'I want a cat!',
            river: 1,
            pee: 2,
            puddle: 1,
            rain: 1
        },
        answerC: {
            text: 'I want something else.',
            fiji: 2,
            ocean: 1,
            deep_sea: 2,
            blood: 1
        },
        answerD: {
            text: 'I don\'t want any animals',
            waterfall: 1,
            ice: 2,
        }   
        },
]

//CALLBACK FUNCTIONS
const incrementProfiles = () => {

    if (event.target.data.lake) {
        profiles.lake += event.target.data.lake
    }

    if (event.target.data.river) {
        profiles.river += event.target.data.river
    }
    
    if (event.target.data.waterfall) {
        profiles.waterfall += event.target.data.waterfall
    }

    if (event.target.data.fiji) {
        profiles.fiji += event.target.data.fiji
    }

    if (event.target.data.pee) {
        profiles.pee += event.target.data.pee
    }

    if (event.target.data.ocean) {
        profiles.ocean += event.target.data.ocean
    }

    if (event.target.data.deep_sea) {
        profiles.deep_sea += event.target.data.deep_sea
    }

    if (event.target.data.puddle) {
        profiles.puddle += event.target.data.puddle
    }

    if (event.target.data.rain) {
        profiles.rain += event.target.data.rain
    }

    if (event.target.data.vodka) {
        profiles.vodka += event.target.data.vodka
    }

    if (event.target.data.seltzer) {
        profiles.seltzer += event.target.data.seltzer
    }

    if (event.target.data.ice) {
        profiles.ice += event.target.data.ice
    }

    if (event.target.data.blood) {
        profiles.blood += event.target.data.blood
    }

    lakeScore.innerText = `lake: ${profiles.lake}`
    riverScore.innerText = `river: ${profiles.river}`
    waterfallScore.innerText = `waterfall: ${profiles.river}`
    fijiScore.innerText = `fiji: ${profiles.fiji}`
    peeScore.innerText = `pee: ${profiles.pee}`
    oceanScore.innerText = `ocean: ${profiles.ocean}`
    deepSeaScore.innerText = `deep sea: ${profiles.deep_sea}`
    puddleScore.innerText = `puddle: ${profiles.puddle}`
    rainScore.innerText = `rain: ${profiles.rain}`
    vodkaScore.innerText = `vodka: ${profiles.vodka}`
    seltzerScore.innerText = `seltzer: ${profiles.seltzer}`
    iceScore.innerText = `ice: ${profiles.ice}`
    bloodScore.innerText = `blood: ${profiles.blood}`
}

const nextQuestion = () => {
    questionNumber++

    if(qAndAObjects[questionNumber] == undefined) {
        questionNumber = 0
        score = -1
        finishGame()
    }

    question.innerText = qAndAObjects[questionNumber].question

    answerA.innerText = qAndAObjects[questionNumber].answerA.text
    answerB.innerText = qAndAObjects[questionNumber].answerB.text
    answerC.innerText = qAndAObjects[questionNumber].answerC.text
    answerD.innerText = qAndAObjects[questionNumber].answerD.text

    answerA.data = qAndAObjects[questionNumber].answerA
    answerB.data = qAndAObjects[questionNumber].answerB
    answerC.data = qAndAObjects[questionNumber].answerC
    answerD.data = qAndAObjects[questionNumber].answerD
}

const startGame = () => {
    startPage.style.display = 'none'
    game.style.display = 'block'

    question.innerText = qAndAObjects[questionNumber].question

    answerA.innerText = qAndAObjects[questionNumber].answerA.text
    answerB.innerText = qAndAObjects[questionNumber].answerB.text
    answerC.innerText = qAndAObjects[questionNumber].answerC.text
    answerD.innerText = qAndAObjects[questionNumber].answerD.text

    answerA.data = qAndAObjects[questionNumber].answerA
    answerB.data = qAndAObjects[questionNumber].answerB
    answerC.data = qAndAObjects[questionNumber].answerC
    answerD.data = qAndAObjects[questionNumber].answerD
}

const finishGame = () => {
    game.style.display = 'none'
}

const resetGame = () => {
    game.style.display = 'block'
    questionNumber = -1
    score = -1
    nextQuestion()
    
}


//EVENT LISTENERS
answersDiv.addEventListener('click', (event) => {


    if (event.target.classList.contains('answer-item')) {
        console.log(event.target.data)
        console.log(profiles)
        console.log(event)
        incrementProfiles()
        nextQuestion()
    }
})

startButton.addEventListener('click', () => {
    startGame()
})

resetButton.addEventListener('click', () => {
    resetGame()
})