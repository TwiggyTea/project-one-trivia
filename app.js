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
const endBar = document.querySelector('#end-bar')

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

console.log(profiles.deep_sea)

//PERCENT VARIABLES
let deepSeaPercent = 0
let lakePercent = 0 
let rainPercent = 0 
let oceanPercent = 0 
let riverPercent = 0 
let puddlePercent = 0 
let fijiPercent = 0 
let bloodPercent = 0 
let peePercent = 0 
let seltzerPercent = 0 
let vodkaPercent = 0 
let waterfallPercent = 0
let icePercent = 0

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
            pee: 1,
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
            pee: 2,
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
    endScreen.style.display = 'flex'
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
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--lake)', 7)
        }
}

const drawRiverRipple = (points) => {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--river)', 14)
        }

}

const drawWaterfallRipple = (points) => {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--waterfall)', 21)
        }
}

const drawFijiRipple = (points) => {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--fiji)', 29)
        }
}

const drawPeeRipple = (points) => {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--pee)', 36)
        }
}

const drawOceanRipple = (points) => {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--ocean)', 43)
        }
}

const drawDeepSeaRipple = (points) => {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--deep_sea)', 50)
        }
}

const drawPuddleRipple = (points) => {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--puddle)', 57)
        }
}

const drawRainRipple = (points) => {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--rain)', 64)
        }
}

const drawVodkaRipple = (points) => {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--vodka)', 71)
        }
}

const drawSeltzerRipple = (points) => {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--seltzer)', 79)
        }
}

const drawIceRipple = (points) => {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--ice)', 86)
        }
}

const drawBloodRipple = (points) => {
        for (let i = 0; i < points; i++) {
            setTimeout(drawRipple, i * 1000, 'var(--blood)', 93)
        }
}

const rippleChecker = (event) => {

    if (event.target.data.lake) {
        let lakeI = event.target.data.lake
            setTimeout(drawLakeRipple, 0, lakeI)
            }

    if (event.target.data.river) {
        let riverI = event.target.data.river
            setTimeout(drawRiverRipple, 100, riverI)
            }

    if (event.target.data.waterfall) {
        let waterfallI = event.target.data.waterfall
        setTimeout(drawWaterfallRipple, 200, waterfallI)
        }

    if (event.target.data.fiji) {
        let fijiI = event.target.data.fiji
            setTimeout(drawFijiRipple, 300, fijiI)
            }

    if (event.target.data.pee) {
        let peeI = event.target.data.pee
            setTimeout(drawPeeRipple, 400, peeI)
            }

    if (event.target.data.ocean) {
        let oceanI = event.target.data.ocean
            setTimeout(drawOceanRipple, 500, oceanI)
            }

    if (event.target.data.deep_sea) {
        let deepSeaI = event.target.data.deep_sea
            setTimeout(drawDeepSeaRipple, 600, deepSeaI)
            }

    if (event.target.data.puddle) {
        let puddleI = event.target.data.puddle
            setTimeout(drawPuddleRipple, 700, puddleI)
            }

    if (event.target.data.rain) {
            let rainI = event.target.data.rain
            setTimeout(drawRainRipple, 800, rainI)
            }

    if (event.target.data.vodka) {
            let vodkaI = event.target.data.vodka
            setTimeout(drawVodkaRipple, 900, vodkaI)
            }

    if (event.target.data.seltzer) {
            let seltzerI = event.target.data.seltzer
            setTimeout(drawSeltzerRipple, 1000, seltzerI)
            }

    if (event.target.data.ice) {
            let iceI = event.target.data.ice
            setTimeout(drawIceRipple, 1100, iceI)
            }

    if (event.target.data.blood) {
            let bloodI = event.target.data.blood
            setTimeout(drawBloodRipple, 1200, bloodI)
            }

}

const getProfilePercents = () => {
    total = ((
        profiles.deep_sea + 
        profiles.lake + 
        profiles.rain + 
        profiles.ocean + 
        profiles.river + 
        profiles.puddle + 
        profiles.fiji + 
        profiles.blood + 
        profiles.pee + 
        profiles.seltzer + 
        profiles.vodka + 
        profiles.waterfall +
        profiles.ice) / 100)

        console.log(total)

    deepSeaPercent = profiles.deep_sea / total
    lakePercent = profiles.lake / total + deepSeaPercent
    rainPercent = profiles.rain / total + lakePercent
    oceanPercent = profiles.ocean / total + rainPercent
    riverPercent = profiles.river / total + oceanPercent
    puddlePercent = profiles.puddle / total + riverPercent
    fijiPercent = profiles.fiji / total + puddlePercent
    bloodPercent = profiles.blood / total + fijiPercent
    peePercent = profiles.pee / total + bloodPercent
    seltzerPercent = profiles.seltzer / total + peePercent
    vodkaPercent = profiles.vodka / total + seltzerPercent
    waterfallPercent = profiles.waterfall / total + vodkaPercent
    icePercent = profiles.ice / total + waterfallPercent
}

const setEndBar = () => {
    endBar.style.background = `linear-gradient(
    var(--deep_sea),
    var(--deep_sea) ${deepSeaPercent}%,

    var(--lake) ${deepSeaPercent}%,
    var(--lake) ${lakePercent}%,

    var(--rain) ${lakePercent}%,
    var(--rain) ${rainPercent}%,

    var(--ocean) ${rainPercent}%,
    var(--ocean) ${oceanPercent}%,

    var(--river) ${oceanPercent}%,
    var(--river) ${riverPercent}%,

    var(--puddle) ${riverPercent}%,
    var(--puddle) ${puddlePercent}%,

    var(--fiji) ${puddlePercent}%,
    var(--fiji) ${fijiPercent}%,

    var(--blood) ${fijiPercent}%,
    var(--blood) ${bloodPercent}%,

    var(--pee) ${bloodPercent}%,
    var(--pee) ${peePercent}%,

    var(--seltzer) ${peePercent}%,
    var(--seltzer) ${seltzerPercent}%,

    var(--vodka) ${seltzerPercent}%,
    var(--vodka) ${vodkaPercent}%,

    var(--waterfall) ${vodkaPercent}%,
    var(--waterfall) ${waterfallPercent}%,

    var(--ice) ${waterfallPercent}%,
    var(--ice))`
}

const setEndBarLabels = () => {
    deepSeaScore.style.height = `${deepSeaPercent}%`
    lakeScore.style.height = `${lakePercent - deepSeaPercent}%`
    rainScore.style.height = `${rainPercent - lakePercent}%`
    oceanScore.style.height = `${oceanPercent - rainPercent}%`
    riverScore.style.height = `${riverPercent - oceanPercent}%`
    puddleScore.style.height = `${puddlePercent - riverPercent}%`
    fijiScore.style.height = `${fijiPercent - puddlePercent}%`
    bloodScore.style.height = `${bloodPercent - fijiPercent}%`
    peeScore.style.height = `${peePercent - bloodPercent}%`
    seltzerScore.style.height = `${seltzerPercent - peePercent}%`
    vodkaScore.style.height = `${vodkaPercent - seltzerPercent}%`
    waterfallScore.style.height = `${waterfallPercent - vodkaPercent}%`
    iceScore.style.height = `${icePercent - waterfallPercent}%`
}

const startFade = () => {
    game.classList.add('fade')
    answerA.classList.add('no-text')
    answerB.classList.add('no-text')
    answerC.classList.add('no-text')
    answerD.classList.add('no-text')
    setTimeout(() => {game.classList.remove('fade')}, 4500)
    setTimeout(() => {answerA.classList.remove('no-text')}, 3000)
    setTimeout(() => {answerB.classList.remove('no-text')}, 3000)
    setTimeout(() => {answerC.classList.remove('no-text')}, 3000)
    setTimeout(() => {answerD.classList.remove('no-text')}, 3000)
}

//EVENT LISTENERS
answersDiv.addEventListener('click', (event) => {


    //FADE OUT{.5s}  invis{s == ripplecheker 1s or 3s}  FADE IN{.5s} 

    if (event.target.classList.contains('answer-item')) {
        startFade()
        // setTimeout(() => {
        //     rippleChecker(event)
        // }, 1250)
        setTimeout((rippleChecker), 1250, event)
        incrementProfiles()
        nextQuestion()
        getProfilePercents()
        setEndBar()
        setEndBarLabels()
    }
})

startButton.addEventListener('click', () => {
    startGame()
})

resetButton.addEventListener('click', () => {
    resetGame()
})

// startGame()
// getProfilePercents()
// setEndBarLabels()
// setEndBar()
// finishGame()