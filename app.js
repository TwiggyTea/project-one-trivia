// notes for tomorrow
// ok so I need to add a new param to draw ripple for the x coordinate
// I need to add colors to my css so that I can pass that as an argument in draw ripple
// I need to find some way to space out the ripples, probably set setInterval

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
const endScreen = document.querySelector('#end-screen')
const body = document.querySelector('body')

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
        answerC: {lake: 0,
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
            ice: 1,
            blood: 1

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
            blood: 2

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
        },  {
        questionNumber: 5,
        question: 'How familiar are you with betrayal?',
        answerA: {
            text: 'I have betrayed others and been betrayed by others.',
            river: 2,
            pee: 2,
            ocean: 3,
            seltzer: 1

        },
        answerB: {
            text: 'Betrayal isn\'t really a thing for me.',
            lake: 2,
            deep_sea: 1,
            puddle: 2,
            seltzer: 1
        },
        answerC: {
            text: 'I have a couple experiences, but I wouldn\'t say I\'m "familiar".',
            fiji: 1,
            rain: 2
        },
        answerD: {
            text: 'I am betrayal incarnate.',
            pee: 1,
            vodka: 2,
            ice: 2,
            blood: 2
        }
        },  {
        questionNumber: 6,
        question: 'What is the worst thing you\'ve ever done?',
        answerA: {
            text: 'I said something I can never take back.',
            puddle: 1,
            seltzer: 2,
            ice: 1

        },
        answerB: {
            text: 'I stole.',
            river: 1,
            ocean: 2,
            fiji: 1
        },
        answerC: {
            text: 'I hurt someone I loved',
            lake: 1,
            blood: 2,
            fiji: 1,
            rain: 2
    
        },
        answerD: {
            text: 'No comment...',
            pee: 1,
            deep_sea: 1,
            vodka: 2,
            waterfall: 1,

        }
        }
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
    waterfallScore.innerText = `waterfall: ${profiles.waterfall}`
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
    endScreen.style.display = 'block'
}

const resetGame = () => {
    endScreen.style.display = 'none'
    game.style.display = 'none'
    startPage.style.display = 'block'
    questionNumber = -1
    profiles = {
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

    lakeScore.innerText = `lake: ${profiles.lake}`
    riverScore.innerText = `river: ${profiles.river}`
    waterfallScore.innerText = `waterfall: ${profiles.waterfall}`
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

    nextQuestion()
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const drawRipple = (color = 'var(--deep_sea)', xCoordinate = '50') => {
    const node = document.createElement("DIV");
    body.appendChild(node)
    node.classList.add('ripple')
    node.style.background = color
    const newNode = node.cloneNode(true);
    newNode.classList.add("animate");
    newNode.style.left = xCoordinate + '%'
    newNode.style.top = '70%'
    node.parentNode.replaceChild(newNode, node);
}

const drawLakeRipple = (points) => {
    // if (event.target.data.lake) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--lake)', 7)
        }
    // }
}

const drawRiverRipple = (points) => {
    // if (event.target.data.river) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--river)', 14)
        }
// }
}

const drawWaterfallRipple = (points) => {
    // if (event.target.data.waterfall) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--waterfall)', 21)
        }
// }
    
}

const drawFijiRipple = (points) => {
    // if (event.target.data.fiji) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--fiji)', 29)
        }
// }
}

const drawPeeRipple = (points) => {
    // if (event.target.data.pee) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--pee)', 36)
        }
// }
}

const drawOceanRipple = (points) => {
    // if (event.target.data.ocean) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--ocean)', 43)
        }
// }
}

const drawDeepSeaRipple = (points) => {
    // if (event.target.data.deep_sea) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--deep_sea)', 50)
        }
// }
}

const drawPuddleRipple = (points) => {
    // if (event.target.data.puddle) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--puddle)', 57)
        }
// }
}

const drawRainRipple = (points) => {
    // if (event.target.data.rain) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--rain)', 64)
        }
// }
}

const drawVodkaRipple = (points) => {
    // if (event.target.data.vodka) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--vodka)', 71)
        }
// }
}

const drawSeltzerRipple = (points) => {
    // if (event.target.data.seltzer) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--seltzer)', 79)
        }
// }
}

const drawIceRipple = (points) => {
    // if (event.target.data.ice) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--ice)', 86)
        }
// }
}

const drawBloodRipple = (points) => {
    // if (event.target.data.blood) {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--blood)', 93)
        }
// }
}

const rippleChecker = () => {

    let lakeI = event.target.data.lake
    let riverI = event.target.data.river
    let waterfallI = event.target.data.waterfall
    let fijiI = event.target.data.fiji
    let peeI = event.target.data.pee
    let oceanI = event.target.data.ocean
    let deepSeaI = event.target.data.deep_sea
    let puddleI = event.target.data.puddle
    let rainI = event.target.data.rain
    let vodkaI = event.target.data.vodka
    let seltzerI = event.target.data.seltzer
    let iceI = event.target.data.ice
    let bloodI = event.target.data.blood

    if (event.target.data.lake) {
            setTimeout(drawLakeRipple, 0, lakeI)
            }

    if (event.target.data.river) {
            setTimeout(drawRiverRipple, 100, riverI)
            }

    if (event.target.data.waterfall) {
        setTimeout(drawWaterfallRipple, 200, waterfallI)
        }

    if (event.target.data.fiji) {
            setTimeout(drawFijiRipple, 300, fijiI)
            }

    if (event.target.data.pee) {
            setTimeout(drawPeeRipple, 400, peeI)
            }

    if (event.target.data.ocean) {
            setTimeout(drawOceanRipple, 500, oceanI)
            }

    if (event.target.data.deep_sea) {
            setTimeout(drawDeepSeaRipple, 600, deepSeaI)
            }

    if (event.target.data.puddle) {
            setTimeout(drawPuddleRipple, 700, puddleI)
            }

    if (event.target.data.rain) {
            setTimeout(drawRainRipple, 800, rainI)
            }

    if (event.target.data.vodka) {
            setTimeout(drawVodkaRipple, 900, vodkaI)
            }

    if (event.target.data.seltzer) {
            setTimeout(drawSeltzerRipple, 1000, seltzerI)
            }

    if (event.target.data.ice) {
            setTimeout(drawIceRipple, 1100, iceI)
            }

    if (event.target.data.blood) {
            setTimeout(drawBloodRipple, 1200, bloodI)
            }

}
//EVENT LISTENERS
answersDiv.addEventListener('click', (event) => {


    if (event.target.classList.contains('answer-item')) {
        rippleChecker()
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