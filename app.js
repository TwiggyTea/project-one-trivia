//QUERY SELECTORS

const question = document.querySelector('#question')
const answersDiv = document.querySelector('#answers')
const answerA = document.querySelector('#answer-a')
const answerB = document.querySelector('#answer-b')
const answerC = document.querySelector('#answer-c')
const answerD = document.querySelector('#answer-d')
const scoreBoard = document.querySelector('#score-board')
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
const resultProfile = document.querySelector('#result-profile')
const resultDescription = document.querySelector('#result-description')
const music = document.querySelector('#bgm')


// YOUR RESULT VARIABLE
let yourResult;

//QUESTION NUMBER
let questionNumber = 0

//PROFILE SCORE TRACKER
let profiles = {
    lake: 1,
    river: 1,
    waterfall: 1,
    fiji: 1,
    pee: 1,
    ocean: 1,
    deep_sea: 1,
    puddle: 1,
    rain: 1,
    vodka: 1,
    seltzer: 1,
    ice: 1,
    blood: 1
}

// PROFILE DESCRIPTION TRACKER
let profileDescriptions = {
    lake: `A stagnant body of fresh water. A home to many fish. Sitting by a lake offers peace and reflection. It isn't going anywhere, nothing flows in, and nothing flows out, but they are found all over the world. Lovable and relaxed, but also narrow and stuck.`,
    river: `Fast flowing fresh water. Full of life and extremely crisp. A river is a gorgeous sight to behold, but anything in it's path will be swept away. The soil in surrounding areas is nutrient rich. Powerful and lively, but also selfish and narrow.`,
    waterfall: `A raging rapid meeting a sharp drop. An awe-inspiring sight. Fast and deadly, a waterfall is not a place that harbors life. A real feat of nature's intensity. Sometimes the end of the road is the most thrilling part of the journey. Exciting and confident, but also reckless and short-lived.`,
    fiji: `A stylish brand of bottled water. A symbol of status to some, and just a drink to others. Fiji brand water has been adopted by internet communities for it's styling and color. It's undeniable that it's packaging is some of the most pronounced. It is also undeniable that it's packaging is plastic. Fashionable and cool, but also superficial and materialistic.`,
    pee: `The ghost of water's past. While urine is not a glamorous type of water, it is more vital to life than most others on this list. Your body creates pee by filter the water that flows through your body. Hardworking and loved by some without without parallel, but also disliked by most and unappreciated.`,
    ocean: `The briny body of water that covers over 70 percent of our planet. The ocean is truly a sight to behold. Vast and encompassing, the sea is synonomous with a heart of adventure. While polluted and over-fished, the ocean is still home to millions of animals and plants. Daring and awe-inspiring, but also damaged and violent.`,
    deep_sea: `Depths reaching miles below sea level. The deep sea is one the last places on Earth's map left uncharted. It is a home to alien creatures large and small. Light can penetrate one kilometer into water. The other ten kilometers are only pitch darkess and a biting chill. Mysterious and polite, but also cold and unusual.`,
    puddle: `A small pool of rainwater. Puddles never get old. There is a childlike playfulness that comes from splashing around in a puddle after an afternoon shower. Whether a bath for birds or a soaking for pedestrians, something as small as a puddle can have an impact. Cute and innocent, but also naive and messy.`,
    rain: `Water condensed from in our atmosphere, falling back to earth. A rainy afternoon brings a calm, bittersweet peacefulness. Going outside to enjoy the weather is nearly out of the question, but a perfect opportunity arises for you to curl up with a book. What is calming inside shelter can be a nightmare outside. Rain can also be a raging hurricane or a deadly flood. Intelligent and soothing, but also malcontent and tiring`,
    vodka: `Was once water, turned alcoholic through a process of fermentation. Alcohol is tricky, it changes people. It can make shy people sociable and polite people rude. Drunkenness is similar to a mild poisoning, but it's a ritual humans go through time and time again. Fun and friendly, but self-loathing and reckless.`,
    seltzer: `Water that has been carbonated. A trendy beverage that some love and some hate. Carbonated water often comes in cans or glass bottles, unlike it's still counterpart. Easy to enjoy on a warm afternoon, seltzer brings a subtle spice to an otherwise neutral drink. Sharp and cool, but also unoriginal and polarizing.`,
    ice: `The solid state of water. When it reaches a cold enough temperature water turns into hard, slippery ice. It is used everyday to add a refreshing chill to our beverages. An ice rink provides a fun environment for you to skate around. On the other hand ice destroys infrastructure and ecosystems year after year. Playful and fresh, but also ruthless and cold.`,
    blood: `Water that runs through all of us. Blood has violent imagery associated with it, gruesome death, injury. That being said bloodshed wouldn't be so feared if blood wasn't so precious to us. It exists in this state of simultaneous fear and love. Passionate and fiery, but also sadistic and miserable.`
}

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
    },  {
        questionNumber: 3 ,
        question: 'What music do you listen to?',
        answerA: {
            text: 'Music that brings me good memories.',
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
            text: 'Music to help me focus.',
            river: 2,
            fiji: 1,
            deep_sea: 2,
            rain: 1
        },
        answerD: {
            text: 'Music to dance to.',
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
            text: 'I don\'t want any animals.',
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
            text: 'I hurt someone I loved.',
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
    },  {
        questionNumber: 7,
        question: 'How do you fit in on a team?',
        answerA: {
            text: 'I try to lead my team.',
            ocean: 1,
            river: 2,
            blood: 2,

        },
        answerB: {
            text: 'I prefer to work alone.',
            deep_sea: 2,
            vodka: 1,
            waterfall: 2
        },
        answerC: {
            text: 'I usually go with the flow.',
            lake: 1,
            fiji: 1,
            pee: 1,
            puddle: 1,
            seltzer: 1
        },
        answerD: {
            text: 'None of these options apply to me.',
            ice: 1,
            vodka: 1,
            ocean: 1,
            rain: 2
        }
    },  {
        questionNumber: 8,
        question: 'How do you compare to the rest of the population?',
        answerA: {
            text: `I'm the best.`,
            ocean: 2,
            ice: 2,
            blood: 1
        },
        answerB: {
            text: `I'm below average.`,
            fiji: 2,
            puddle: 1,
            lake: 2
        },
        answerC: {
            text: `I'm the worst.`,
            pee: 1,
            vodka: 2
        },
        answerD: {
            text: `I'm above average.`,
            rain: 2,
            seltzer: 2,
            puddle: 1,
            river: 1
        }
    },  {
        questionNumber: 9,
        question: 'What is your idea of a perfect first date?',
        answerA: {
            text: 'A romantic dinner.',
            rain: 2,
            lake: 1,
            ocean: 1,
            seltzer: 1
        },
        answerB: {
            text: 'Netflix and chill.',
            pee: 2,
            fiji: 1,
            rain: 1
        },
        answerC: {
            text: 'A visit to a meuseum.',
            fiji: 2,
            river: 1,
            ocean: 2
        },
        answerD: {
            text: 'Going out to dance.',
            waterfall: 2,
            blood: 2,
            ice: 1
        }
    },  {
        questionNumber: 10,
        question: 'When are you most yourself?',
        answerA: {
            text: 'When I am alone.',
            deep_sea: 2,
            pee: 2,
            lake: 1,
            rain: 2
        },
        answerB: {
            text: 'When I am lost in a crowd.',
            vodka: 2,
            fiji: 1,
            pee: 1,
            blood: 1
        },
        answerC: {
            text: 'When I am exploring something new.',
            puddle: 1,
            waterfall: 2,
            river: 1,
            rain: 1
        },
        answerD: {
            text: 'When I am in a farmilliar space.',
            puddle: 2,
            deep_sea: 1,
            seltzer: 1
        }
    },  {
        questionNumber: 11,
        question: 'What percent of your income did you donate to charity this past year?',
        answerA: {
            text: 'None of it.',
            ice: 2,
            fiji: 2,
            lake: 2,
            vodka: 1
        },
        answerB: {
            text: 'I volunteered my time!',
            puddle: 2,
            river: 2,
            rain: 1,
        },
        answerC: {
            text: 'Under 5 percent.',
            seltzer: 2,
            waterfall: 1,
            deep_sea: 2
        },
        answerD: {
            text: '5 percent or more.',
            ocean: 2,
            pee: 1,
            blood: 1
        }
    },  {
        questionNumber: 12,
        question: 'How do you feel about travel?',
        answerA: {
            text: `I'm going to travel the world.`,
            ocean: 2,
            waterfall: 1,
            fiji: 1,
            seltzer: 1
        },
        answerB: {
            text: `Home is where the heart is.`,
            ice: 1,
            lake: 2,
            pee: 1,
            puddle: 1,
            blood: 2
        },
        answerC: {
            text: `I do like a good road trip.`,
            river: 2,
            waterfall: 1,
            puddle: 1,
            rain: 1,
            fiji: 1
        },
        answerD: {
            text: `I don't move.`,
            ice: 2,
            deep_sea: 1,
            rain: 2,
            vodka: 2
        }
    },  {
        questionNumber: 13,
        question: `How did you feel about twelve previous questions?`,
        answerA: {
            text: 'They were too personal.',
            deep_sea: 2,
            vodka: 1,
            seltzer: 2,
            lake: 1
        },
        answerB: {
            text: 'I enjoyed them!',
            pee: 2,
            ocean: 1,
            ice: 2,
            blood: 2,
            waterfall: 2
        },
        answerC: {
            text: `The questions made me really think about myself.`,
            fiji: 2,
            rain: 1,
            vodka: 1,
            river: 1
        },
        answerD: {
            text: 'They were super weird.',
            puddle: 2,
            seltzer: 1,
            lake: 1,
            river: 1
        }
    }
]

//DRIP SVG
let drip = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="1vw" height="572.801px" viewBox="0 0 572.8 572.801" style="enable-background:new 0 0 572.8 572.801;"
xml:space="preserve">
<g>
<path d="M520.25,353.6c0,125-100.5,219.201-233.8,219.201S52.55,478.6,52.55,353.6c0-115.3,164.7-301.5,197.7-337.7
c9.3-10.2,22.4-15.9,36.2-15.9s26.9,5.8,36.2,15.9C355.55,52.1,520.25,238.4,520.25,353.6z"/>
</g>
</svg>`

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

    lakeScore.innerText = ` - Lake: ${profiles.lake - 1}`
    riverScore.innerText = ` - River: ${profiles.river - 1 - 1}`
    waterfallScore.innerText = ` - Waterfall: ${profiles.waterfall - 1}`
    fijiScore.innerText = ` - Fiji: ${profiles.fiji - 1}`
    peeScore.innerText = ` - Pee: ${profiles.pee - 1}`
    oceanScore.innerText = ` - Ocean: ${profiles.ocean - 1}`
    deepSeaScore.innerText = ` - Deep Sea: ${profiles.deep_sea - 1}`
    puddleScore.innerText = ` - Puddle: ${profiles.puddle - 1}`
    rainScore.innerText = ` - Rain: ${profiles.rain - 1}`
    vodkaScore.innerText = ` - Vodka: ${profiles.vodka - 1}`
    seltzerScore.innerText = ` - Seltzer: ${profiles.seltzer - 1}`
    iceScore.innerText = ` - Ice: ${profiles.ice - 1}`
    bloodScore.innerText = ` - Blood: ${profiles.blood - 1}`

    yourResult = Object.keys(profiles).reduce((a, b) => profiles[a] > profiles[b] ? a : b)
}

const nextQuestion = () => {
    questionNumber++

    if(qAndAObjects[questionNumber] == undefined) {
        questionNumber = 0
        score = -1
        finishGame()
    }

    setTimeout(() => {
        question.innerText = qAndAObjects[questionNumber].question

        answerA.innerText = qAndAObjects[questionNumber].answerA.text
        answerB.innerText = qAndAObjects[questionNumber].answerB.text
        answerC.innerText = qAndAObjects[questionNumber].answerC.text
        answerD.innerText = qAndAObjects[questionNumber].answerD.text
    }, 3000)

    answerA.data = qAndAObjects[questionNumber].answerA
    answerB.data = qAndAObjects[questionNumber].answerB
    answerC.data = qAndAObjects[questionNumber].answerC
    answerD.data = qAndAObjects[questionNumber].answerD

    setTimeout(() => {window.scrollTo(0,0); }, 4000)
    
}

const startGame = () => {

    game.classList.add('start-fade')
    startPage.classList.add('fade')
    setTimeout(() => {startPage.classList.remove('fade')}, 7000)
    setTimeout(() => {game.classList.remove('start-fade')}, 3000)
    setTimeout(() => {game.style.display = 'block'}, 2)
    setTimeout(() => {startPage.style.display = 'none'}, 1250)

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

    resultProfile.style.color = `var(--${yourResult})`
    resultDescription.innerText = profileDescriptions[`${yourResult}`]

    drawEndAnimations()

    if (yourResult == 'deep_sea') {
        yourResult = 'deep sea'
    }
    setTimeout(() =>{game.style.display = 'none'}, 4000)
    endScreen.style.display = 'flex'
    resetButton.style.display = 'block'
    resultProfile.innerText = yourResult
}

const resetGame = () => {
    // clearInterval(drawEndAnimations)
    // endScreen.style.display = 'none'
    // game.style.display = 'none'
    // startPage.style.display = 'block'
    // questionNumber = -1
    // profiles = {
    //     lake: 0,
    //     river: 0,
    //     waterfall: 0,
    //     fiji: 0,
    //     pee: 0,
    //     ocean: 0,
    //     deep_sea: 0,
    //     puddle: 0,
    //     rain: 0,
    //     vodka: 0,
    //     seltzer: 0,
    //     ice: 0,
    //     blood: 0
    // }
    window.location.reload()

    // lakeScore.innerText = ` - Lake: ${profiles.lake - 1}`
    // riverScore.innerText = ` - River: ${profiles.river - 1}`
    // waterfallScore.innerText = ` - Waterfall: ${profiles.waterfall - 1}`
    // fijiScore.innerText = ` - Fiji: ${profiles.fiji - 1}`
    // peeScore.innerText = ` - Pee: ${profiles.pee - 1}`
    // oceanScore.innerText = ` - Ocean: ${profiles.ocean - 1}`
    // deepSeaScore.innerText = ` - Deep Sea: ${profiles.deep_sea - 1}`
    // puddleScore.innerText = ` -  Puddle: ${profiles.puddle - 1}`
    // rainScore.innerText = ` - Rain: ${profiles.rain - 1}`
    // vodkaScore.innerText = ` - Vodka: ${profiles.vodka - 1}`
    // seltzerScore.innerText = ` - Seltzer: ${profiles.seltzer - 1}`
    // iceScore.innerText = ` - Ice: ${profiles.ice - 1}`
    // bloodScore.innerText = ` - Blood: ${profiles.blood - 1}`

    // nextQuestion()
    
}

const drawEndAnimations = () => {
    setInterval(drawDrip, 5000,`var(--${yourResult})`, 66)
    setInterval(drawRipple, 5000,`var(--${yourResult})`, 66)
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

const drawDrip = (color = 'var(--deep_sea)', xCoordinate = '50') => {
    const node = document.createElement("DIV");
    node.innerHTML = drip
    node.children[0].style.fill = color
    body.appendChild(node)
    node.classList.add('ripple')
    const newNode = node.cloneNode(true);
    newNode.classList.add("fall");
    newNode.style.left = xCoordinate + '%'
    newNode.style.top = '0%'
    node.parentNode.replaceChild(newNode, node);
}

const drawLakeDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--lake)', 7)
    }
}

const drawRiverDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--river)', 14)
    }

}

const drawWaterfallDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--waterfall)', 21)
    }
}

const drawFijiDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--fiji)', 29)
    }
}

const drawPeeDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--pee)', 36)
    }
}

const drawOceanDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--ocean)', 43)
    }
}

const drawDeepSeaDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--deep_sea)', 50)
    }
}

const drawPuddleDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--puddle)', 57)
    }
}

const drawRainDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--rain)', 64)
    }
}

const drawVodkaDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--vodka)', 71)
    }
}

const drawSeltzerDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--seltzer)', 79)
    }
}

const drawIceDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--ice)', 86)
    }
}

const drawBloodDrip = (points) => {
    for (let i = 0; i < points; i++) {
        setTimeout(drawDrip, i * 1000, 'var(--blood)', 93)
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

const dripChecker = (event) => {

    if (event.target.data.lake) {
        let lakeI = event.target.data.lake
            setTimeout(drawLakeDrip, 0, lakeI)
            }

    if (event.target.data.river) {
        let riverI = event.target.data.river
            setTimeout(drawRiverDrip, 100, riverI)
            }

    if (event.target.data.waterfall) {
        let waterfallI = event.target.data.waterfall
        setTimeout(drawWaterfallDrip, 200, waterfallI)
        }

    if (event.target.data.fiji) {
        let fijiI = event.target.data.fiji
            setTimeout(drawFijiDrip, 300, fijiI)
            }

    if (event.target.data.pee) {
        let peeI = event.target.data.pee
            setTimeout(drawPeeDrip, 400, peeI)
            }

    if (event.target.data.ocean) {
        let oceanI = event.target.data.ocean
            setTimeout(drawOceanDrip, 500, oceanI)
            }

    if (event.target.data.deep_sea) {
        let deepSeaI = event.target.data.deep_sea
            setTimeout(drawDeepSeaDrip, 600, deepSeaI)
            }

    if (event.target.data.puddle) {
        let puddleI = event.target.data.puddle
            setTimeout(drawPuddleDrip, 700, puddleI)
            }

    if (event.target.data.rain) {
            let rainI = event.target.data.rain
            setTimeout(drawRainDrip, 800, rainI)
            }

    if (event.target.data.vodka) {
            let vodkaI = event.target.data.vodka
            setTimeout(drawVodkaDrip, 900, vodkaI)
            }

    if (event.target.data.seltzer) {
            let seltzerI = event.target.data.seltzer
            setTimeout(drawSeltzerDrip, 1000, seltzerI)
            }

    if (event.target.data.ice) {
            let iceI = event.target.data.ice
            setTimeout(drawIceDrip, 1100, iceI)
            }

    if (event.target.data.blood) {
            let bloodI = event.target.data.blood
            setTimeout(drawBloodDrip, 1200, bloodI)
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
    endScreen.classList.add('end-fade')
    answerA.classList.add('no-click')
    answerB.classList.add('no-click')
    answerC.classList.add('no-click')
    answerD.classList.add('no-click')
    setTimeout(() => {game.classList.remove('fade')}, 7000)
    setTimeout(() => {endScreen.classList.remove('end-fade')}, 7000)
    setTimeout(() => {answerA.classList.remove('no-click')}, 7000)
    setTimeout(() => {answerB.classList.remove('no-click')}, 7000)
    setTimeout(() => {answerC.classList.remove('no-click')}, 7000)
    setTimeout(() => {answerD.classList.remove('no-click')}, 7000)
}

//EVENT LISTENERS
answersDiv.addEventListener('click', (event) => {

    //FADE OUT{.5s}  invis{s == ripplecheker 1s or 3s}  FADE IN{.5s} 

    if (event.target.classList.contains('answer-item')) {
        startFade()
        dripChecker(event)
        rippleChecker(event)
        incrementProfiles()
        nextQuestion()
        getProfilePercents()
        setEndBar()
        setEndBarLabels()
    }
})

startButton.addEventListener('click', () => {
    startGame()
    music.play()
})

resetButton.addEventListener('click', () => {
    resetGame()
})