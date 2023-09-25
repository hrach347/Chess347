//////////////////
//Menu
//////////////////

let board = document.getElementById('board')
let title = document.getElementById('title')
let selectedFigures = "bases"

let arrowLeft = document.getElementById('arrowLeft')
let arrowRight = document.getElementById('arrowRight')
let chooseFigures = ['bases', 'space', "metal", "3d", "chessKid"]
let chooseFiguresNames = ['wk.png', 'wq.png', 'wr.png', 'wb.png', 'wn.png', 'wp.png']
let images = Array.from(document.querySelectorAll('.pieces img'))
let i = 0
arrowLeft.addEventListener('click', () => {
    i--
    if (i < 0) {
        i = chooseFigures.length - 1
    }
    selectedFigures = chooseFigures[i]
    for (let j = 0; j < images.length; j++) {
        images[j].src = chooseFigures[i] + '/' + chooseFiguresNames[j]
    }
})
arrowRight.addEventListener('click', () => {
    i++
    if (i >= chooseFigures.length) {
        i = 0
    }
    selectedFigures = chooseFigures[i]
    for (let j = 0; j < images.length; j++) {
        images[j].src = chooseFigures[i] + '/' + chooseFiguresNames[j]
    }
})

let arrowLeft2 = document.getElementById('arrowLeft2')
let arrowRight2 = document.getElementById('arrowRight2')
let chooseColors = [{ black: "#964d22", white: "#fccc74" }, { black: "#769656", white: "#eeeed2" }, { black: "#404040", white: "#909090" }, { black: "#002c73", white: "#75aaff" }, { black: "#252525", white: "#ff5959" }]
let colorDivs = Array.from(document.querySelectorAll(".colors>div"))
let i2 = 0
let colorBlack = "#964d22"
let colorWhite = "#fccc74"
arrowLeft2.addEventListener('click', () => {
    i2--
    if (i2 < 0) {
        i2 = chooseColors.length - 1
    }
    colorDivs[0].style.background = chooseColors[i2].black
    colorDivs[1].style.background = chooseColors[i2].white
    colorDivs[2].style.background = chooseColors[i2].white
    colorDivs[3].style.background = chooseColors[i2].black
    colorBlack = chooseColors[i2].black
    colorWhite = chooseColors[i2].white
})
arrowRight2.addEventListener('click', () => {
    i2++
    if (i2 >= chooseColors.length) {
        i2 = 0
    }
    colorDivs[0].style.background = chooseColors[i2].black
    colorDivs[1].style.background = chooseColors[i2].white
    colorDivs[2].style.background = chooseColors[i2].white
    colorDivs[3].style.background = chooseColors[i2].black
    colorBlack = chooseColors[i2].black
    colorWhite = chooseColors[i2].white
})

let time = 10
let lastTimeDiv = document.getElementById('m10')
function chooseClock(min, div) {
    time = min
    lastTimeDiv.style.borderColor = "transparent"
    lastTimeDiv = div
    div.style.borderColor = "rgb(67, 255, 67)"
}
let timeDiv1 = document.getElementById('time1')
let timeDiv2 = document.getElementById('time2')
//////////////////
//Game
//////////////////

let startMenu = document.getElementById('startMenu')
let game = document.getElementById('mainGame')

function startGame() {
    startMenu.style.display = "none"
    game.style.display = "block"
    //Time Clock
    let clock1;
    let clock2;
    if(time){
    let time1 = { min: time, sec: 0 }
    let time2 = { min: time, sec: 0 }
    timeDiv1.innerText = time1.min + ":" + time1.sec + "0"
    timeDiv2.innerText = time2.min + ":" + time2.sec + "0"
    function startClock1() {
        clock1 = setInterval(() => {
            time1.sec -= 1
            if (time1.sec <= 0) {
                if (time1.min == 0) {
                    timeDiv1.innerText = "0:0"
                    title.innerText = "Ran out of time"
                    for (let y = 0; y < cubes.length; y++) {
                        for (let x = 0; x < cubes[y].length; x++) {
                            if (cubes[y][x].color === "white") {
                                cubes[y][x].piece.style.animation = "lose"
                                cubes[y][x].piece.style.animationDuration = "0.5s"
                                cubes[y][x].piece.style.animationIterationCount = "infinite"
                            }
                        }
                    }
                    setTimeout(() => {
                        for (let y = 0; y < cubes.length; y++) {
                            for (let x = 0; x < cubes[y].length; x++) {
                                if (cubes[y][x].color === "white") {
                                    cubes[y][x].piece.style.display = "none"
                                }
                            }
                        }
                    }, 3470)
                    setTimeout(() => {
                        window.location.reload()
                    }, 5000)
                    clearInterval(clock1)
                    //White lost
                }
                time1.sec = 59
                time1.min -= 1
            }
            if (timeDiv1.innerText != "0:0") {
                timeDiv1.innerText = time1.min + ":" + time1.sec
            }
        }, 1000)
    }
    startClock1()
    function startClock2() {
        clock2 = setInterval(() => {
            time2.sec -= 1
            if (time2.sec <= 0) {
                if (time2.min == 0) {
                    timeDiv2.innerText = "0:0"
                    title.innerText = "Ran out of time"
                    for (let y = 0; y < cubes.length; y++) {
                        for (let x = 0; x < cubes[y].length; x++) {
                            if (cubes[y][x].color === "black") {
                                cubes[y][x].piece.style.animation = "lose"
                                cubes[y][x].piece.style.animationDuration = "0.5s"
                                cubes[y][x].piece.style.animationIterationCount = "infinite"
                            }
                        }
                    }
                    setTimeout(() => {
                        for (let y = 0; y < cubes.length; y++) {
                            for (let x = 0; x < cubes[y].length; x++) {
                                if (cubes[y][x].color === "black") {
                                    cubes[y][x].piece.style.display = "none"
                                }
                            }
                        }
                    }, 3470)
                    setTimeout(() => {
                        window.location.reload()
                    }, 5000)
                    clearInterval(clock2)
                    //Black lost
                }
                time2.sec = 59
                time2.min -= 1
            }
            if (timeDiv2.innerText != "0:0") {
                timeDiv2.innerText = time2.min + ":" + time2.sec
            }
        }, 1000)
    }
}
else{
    timeDiv1.innerText = "free"
    timeDiv2.innerText = "free"
    timeDiv2.style.opacity = "1"
}
    let places = [
        {
            y: 0,
            x: 0,
            color: "black",
            src: `./${selectedFigures}/br.png`,
            name: "rook"
        },
        {
            y: 0,
            x: 7,
            color: "black",
            src: `./${selectedFigures}/br.png`,
            name: "rook"
        },
        {
            y: 7,
            x: 0,
            color: "white",
            src: `./${selectedFigures}/wr.png`,
            name: "rook"
        },
        {
            y: 7,
            x: 7,
            color: "white",
            src: `./${selectedFigures}/wr.png`,
            name: "rook"
        },

        {
            y: 0,
            x: 1,
            color: "black",
            src: `./${selectedFigures}/bn.png`,
            name: "knight"
        },
        {
            y: 0,
            x: 6,
            color: "black",
            src: `./${selectedFigures}/bn.png`,
            name: "knight"
        },
        {
            y: 7,
            x: 6,
            color: "white",
            src: `./${selectedFigures}/wn.png`,
            name: "knight"
        },
        {
            y: 7,
            x: 1,
            color: "white",
            src: `./${selectedFigures}/wn.png`,
            name: "knight"
        },

        {
            y: 0,
            x: 2,
            color: "black",
            src: `./${selectedFigures}/bb.png`,
            name: "bishop"
        },
        {
            y: 0,
            x: 5,
            color: "black",
            src: `./${selectedFigures}/bb.png`,
            name: "bishop"
        },
        {
            y: 7,
            x: 5,
            color: "white",
            src: `./${selectedFigures}/wb.png`,
            name: "bishop"
        },
        {
            y: 7,
            x: 2,
            color: "white",
            src: `./${selectedFigures}/wb.png`,
            name: "bishop"
        },

        {
            y: 0,
            x: 3,
            color: "black",
            src: `./${selectedFigures}/bq.png`,
            name: "queen"
        },
        {
            y: 7,
            x: 3,
            color: "white",
            src: `./${selectedFigures}/wq.png`,
            name: "queen"
        },

        {
            y: 0,
            x: 4,
            color: "black",
            src: `./${selectedFigures}/bk.png`,
            name: "king"
        },
        {
            y: 7,
            x: 4,
            color: "white",
            src: `./${selectedFigures}/wk.png`,
            name: "king"
        },
    ]
    let pawns = [
        {
            y: 1,
            color: "black",
            src: `./${selectedFigures}/bp.png`,
            name: "pawn"
        },
        {
            y: 6,
            color: "white",
            src: `./${selectedFigures}/wp.png`,
            name: "pawn"
        }
    ]
    let cubes = []
    let isWhiteCheck = false
    let isBlackCheck = false

    function generateBoard() {
        let color = colorBlack
        for (let y = 0; y < 8; y++) {
            cubes.push([])
            for (let x = 0; x < 8; x++) {
                if (x % 8 == 0) {
                    if (color == colorBlack) {
                        color = colorWhite
                    } else {
                        color = colorBlack
                    }
                }
                let cube = document.createElement('div')
                cube.className = "cube"
                if (color == colorBlack) {
                    cube.style.background = color
                    color = colorWhite
                } else {
                    cube.style.background = color
                    color = colorBlack
                }
                cube.dataset.y = y
                cube.dataset.x = x
                cubes[y][x] = {
                    box: cube,
                    piece: null,
                    y: y,
                    x: x,
                    color: null,
                    name: null,
                }
                board.append(cube)
            }
        }
    }
    generateBoard()


    //place pieces
    for (let i = 0; i < places.length; i++) {
        let img = document.createElement('img')
        img.src = places[i].src
        img.className = "piece"
        img.dataset.color = places[i].color
        img.dataset.name = places[i].name
        cubes[places[i].y][places[i].x].piece = img
        cubes[places[i].y][places[i].x].color = places[i].color
        cubes[places[i].y][places[i].x].name = places[i].name
        cubes[places[i].y][places[i].x].box.append(img)
        img.dataset.x = places[i].x
        img.dataset.y = places[i].y
    }
    //place pawns
    for (let i = 0; i < pawns.length; i++) {
        for (let j = 0; j < 8; j++) {
            let img = document.createElement('img')
            img.src = pawns[i].src
            img.className = "piece"
            img.dataset.color = pawns[i].color
            img.dataset.name = pawns[i].name
            cubes[pawns[i].y][j].piece = img
            cubes[pawns[i].y][j].color = pawns[i].color
            cubes[pawns[i].y][j].name = pawns[i].name
            cubes[pawns[i].y][j].box.append(img)
            img.dataset.x = j
            img.dataset.y = pawns[i].y
        }
    }


    console.log(cubes)



    function clearShadows() {
        for (let i = 0; i < cubes.length; i++) {
            for (let j = 0; j < cubes.length; j++) {
                cubes[i][j].box.style.boxShadow = "none"
            }
        }
    }

    let selectedPiece = null
    let weirdWhitePawn = null
    let weirdBlackPawn = null
    let moves = {
        white: {
            pawn: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                if (y > 0 && !cubes[y - 1][x].piece) {
                    availablePLaces.push(cubes[y - 1][x])
                    if (typeof cubes[y - 2] !== "undefined" && !cubes[y - 2][x].piece && y == 6) {
                        availablePLaces.push(cubes[y - 2][x])
                        weirdWhitePawn = cubes[y - 2][x]
                    }
                }
                if (y > 0 && x > 0 && cubes[y - 1][x - 1].piece && cubes[y - 1][x - 1].color == "black") {
                    availableToEat.push(cubes[y - 1][x - 1])
                }
                if (y > 0 && x < 7 && cubes[y - 1][x + 1].piece && cubes[y - 1][x + 1].color == "black") {
                    availableToEat.push(cubes[y - 1][x + 1])
                }
                if (x < 7 && cubes[y][x + 1] === weirdBlackPawn) {
                    availableToEat.push(cubes[y - 1][x + 1])
                }
                else if (x > 0 && cubes[y][x - 1] === weirdBlackPawn) {
                    availableToEat.push(cubes[y - 1][x - 1])
                }
                showChecked(availablePLaces, availableToEat, y, x, el)
                board.addEventListener('click', (e) => {
                    if (availablePLaces.includes(cubes[e.target.dataset.y][e.target.dataset.x])) {
                        if(time){
                        clearInterval(clock1)
                        startClock2()
                        timeDiv1.style.opacity = "0.3"
                        timeDiv2.style.opacity = "1"
                        }
                        if (weirdWhitePawn === cubes[e.target.dataset.y][e.target.dataset.x]) {
                            weirdBlackPawn = null
                        }
                        else {
                            weirdBlackPawn = null
                            weirdWhitePawn = null
                        }
                        clearShadows()
                        let place = cubes[e.target.dataset.y][e.target.dataset.x]
                        place.piece = el
                        place.name = cubes[y][x].name
                        place.color = cubes[y][x].color
                        place.box.append(place.piece)
                        el.dataset.y = place.y
                        el.dataset.x = place.x
                        cubes[y][x].piece = null
                        cubes[y][x].color = null
                        cubes[y][x].name = null
                        checkIfQueen(el, 0)
                        turn = "black"
                        checkAnime()
                    }
                    availablePLaces = []
                    if (availableToEat.includes(cubes[e.target.dataset.y][e.target.dataset.x])) {
                        if(time){
                        clearInterval(clock1)
                        startClock2()
                        timeDiv1.style.opacity = "0.3"
                        timeDiv2.style.opacity = "1"
                        }
                        if (!cubes[e.target.dataset.y][e.target.dataset.x].piece) {
                            let place = cubes[Number(e.target.dataset.y) + 1][e.target.dataset.x]
                            place.piece = null
                            place.name = null
                            place.color = null
                            place.box.innerHTML = ``
                        }
                        clearShadows()
                        let place = cubes[e.target.dataset.y][e.target.dataset.x]
                        place.piece = el
                        place.name = cubes[y][x].name
                        place.color = cubes[y][x].color
                        place.box.innerHTML = ``
                        place.box.append(place.piece)
                        el.dataset.y = place.y
                        el.dataset.x = place.x
                        cubes[y][x].piece = null
                        cubes[y][x].color = null
                        cubes[y][x].name = null
                        checkIfQueen(el, 0)
                        turn = "black"
                        checkAnime()
                        weirdBlackPawn = null
                        weirdWhitePawn = null
                    }
                    availableToEat = []
                })
                return [availablePLaces, availableToEat, y, x, el]
            },
            rook: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = rookMove(availablePLaces, availableToEat, y, x, el)
                addEvent(...args)
                return args
            },
            knight: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = knightMove(availablePLaces, availableToEat, y, x, el)
                addEvent(...args)
                return args
            },
            bishop: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = bishopMove(availablePLaces, availableToEat, y, x, el)
                addEvent(...args)
                return args
            },
            queen: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = queenMove(availablePLaces, availableToEat, y, x, el)
                addEvent(...args)
                return args
            },
            king: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = kingMove(availablePLaces, availableToEat, y, x, el, true)
                addEvent(...args)
                return args
            },
        },
        black: {
            pawn: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                if (y < 7 && !cubes[y + 1][x].piece) {
                    availablePLaces.push(cubes[y + 1][x])
                    if (typeof cubes[y + 2] !== "undefined" && !cubes[y + 2][x].piece && y == 1) {
                        availablePLaces.push(cubes[y + 2][x])
                        weirdBlackPawn = cubes[y + 2][x]
                    }
                }
                if (y < 7 && x > 0 && cubes[y + 1][x - 1].piece && cubes[y + 1][x - 1].color == "white") {
                    availableToEat.push(cubes[y + 1][x - 1])
                }
                if (y < 7 && x < 7 && cubes[y + 1][x + 1].piece && cubes[y + 1][x + 1].color == "white") {
                    availableToEat.push(cubes[y + 1][x + 1])
                }
                if (x < 7 && cubes[y][x + 1] === weirdWhitePawn) {
                    availableToEat.push(cubes[y + 1][x + 1])
                }
                else if (x > 0 && cubes[y][x - 1] === weirdWhitePawn) {
                    availableToEat.push(cubes[y + 1][x - 1])
                }
                showChecked(availablePLaces, availableToEat, y, x, el)
                board.addEventListener('click', (e) => {
                    if (availablePLaces.includes(cubes[e.target.dataset.y][e.target.dataset.x])) {
                        if(time){
                        clearInterval(clock2)
                        startClock1()
                        timeDiv2.style.opacity = "0.3"
                        timeDiv1.style.opacity = "1"
                        }
                        if (weirdBlackPawn === cubes[e.target.dataset.y][e.target.dataset.x]) {
                            weirdWhitePawn = null
                        }
                        else {
                            weirdBlackPawn = null
                            weirdWhitePawn = null
                        }
                        clearShadows()
                        let place = cubes[e.target.dataset.y][e.target.dataset.x]
                        place.piece = el
                        place.name = cubes[y][x].name
                        place.color = cubes[y][x].color
                        place.box.append(place.piece)
                        el.dataset.y = place.y
                        el.dataset.x = place.x
                        cubes[y][x].piece = null
                        cubes[y][x].color = null
                        cubes[y][x].name = null
                        checkIfQueen(el, 7)
                        turn = "white"
                        checkAnime()
                    }
                    availablePLaces = []
                    if (availableToEat.includes(cubes[e.target.dataset.y][e.target.dataset.x])) {
                        if(time){
                        clearInterval(clock2)
                        startClock1()
                        timeDiv2.style.opacity = "0.3"
                        timeDiv1.style.opacity = "1"
                        }
                        if (!cubes[e.target.dataset.y][e.target.dataset.x].piece) {
                            let place = cubes[Number(e.target.dataset.y) - 1][e.target.dataset.x]
                            place.piece = null
                            place.name = null
                            place.color = null
                            place.box.innerHTML = ``
                        }
                        clearShadows()
                        let place = cubes[e.target.dataset.y][e.target.dataset.x]
                        place.piece = el
                        place.name = cubes[y][x].name
                        place.color = cubes[y][x].color
                        place.box.innerHTML = ``
                        place.box.append(place.piece)
                        el.dataset.y = place.y
                        el.dataset.x = place.x
                        cubes[y][x].piece = null
                        cubes[y][x].color = null
                        cubes[y][x].name = null
                        checkIfQueen(el, 7)
                        turn = "white"
                        checkAnime()
                        weirdBlackPawn = null
                        weirdWhitePawn = null
                    }
                    availableToEat = []
                })
                return [availablePLaces, availableToEat, y, x, el]
            },
            rook: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = rookMove(availablePLaces, availableToEat, y, x, el)
                addEvent(...args)
                return args
            },
            knight: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = knightMove(availablePLaces, availableToEat, y, x, el)
                addEvent(...args)
                return args
            },
            bishop: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = bishopMove(availablePLaces, availableToEat, y, x, el)
                addEvent(...args)
                return args
            },
            queen: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = queenMove(availablePLaces, availableToEat, y, x, el)
                addEvent(...args)
                return args
            },
            king: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = kingMove(availablePLaces, availableToEat, y, x, el, true)
                addEvent(...args)
                return args
            },
        }
    }
    let moves2 = {
        white: {
            pawn: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                if (y > 0 && !cubes[y - 1][x].piece) {
                    availablePLaces.push(cubes[y - 1][x])
                    if (typeof cubes[y - 2] !== "undefined" && !cubes[y - 2][x].piece && y == 6) {
                        availablePLaces.push(cubes[y - 2][x])
                        // weirdWhitePawn = cubes[y - 2][x]
                    }
                }
                if (y > 0 && x > 0 && cubes[y - 1][x - 1].piece && cubes[y - 1][x - 1].color == "black") {
                    availableToEat.push(cubes[y - 1][x - 1])
                }
                if (y > 0 && x < 7 && cubes[y - 1][x + 1].piece && cubes[y - 1][x + 1].color == "black") {
                    availableToEat.push(cubes[y - 1][x + 1])
                }
                if (x < 7 && cubes[y][x + 1] === weirdBlackPawn) {
                    availableToEat.push(cubes[y - 1][x + 1])
                }
                else if (x > 0 && cubes[y][x - 1] === weirdBlackPawn) {
                    availableToEat.push(cubes[y - 1][x - 1])
                }
                showChecked(availablePLaces, availableToEat, y, x, el)
                return [availablePLaces, availableToEat, y, x, el]
            },
            rook: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = rookMove(availablePLaces, availableToEat, y, x, el)
                showChecked(availablePLaces, availableToEat, y, x, el)
                return args
            },
            knight: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = knightMove(availablePLaces, availableToEat, y, x, el)
                showChecked(availablePLaces, availableToEat, y, x, el)
                return args
            },
            bishop: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = bishopMove(availablePLaces, availableToEat, y, x, el)
                showChecked(availablePLaces, availableToEat, y, x, el)
                return args
            },
            queen: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = queenMove(availablePLaces, availableToEat, y, x, el)
                showChecked(availablePLaces, availableToEat, y, x, el)
                return args
            },
            king: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = kingMove(availablePLaces, availableToEat, y, x, el)
                showChecked(availablePLaces, availableToEat, y, x, el)
                return args
            },
        },
        black: {
            pawn: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                if (y < 7 && !cubes[y + 1][x].piece) {
                    availablePLaces.push(cubes[y + 1][x])
                    if (typeof cubes[y + 2] !== "undefined" && !cubes[y + 2][x].piece && y == 1) {
                        availablePLaces.push(cubes[y + 2][x])
                        // weirdBlackPawn = cubes[y + 2][x]
                    }
                }
                if (y < 7 && x > 0 && cubes[y + 1][x - 1].piece && cubes[y + 1][x - 1].color == "white") {
                    availableToEat.push(cubes[y + 1][x - 1])
                }
                if (y < 7 && x < 7 && cubes[y + 1][x + 1].piece && cubes[y + 1][x + 1].color == "white") {
                    availableToEat.push(cubes[y + 1][x + 1])
                }
                if (x < 7 && cubes[y][x + 1] === weirdWhitePawn) {
                    availableToEat.push(cubes[y + 1][x + 1])
                }
                else if (x > 0 && cubes[y][x - 1] === weirdWhitePawn) {
                    availableToEat.push(cubes[y + 1][x - 1])
                }
                showChecked(availablePLaces, availableToEat, y, x, el)
                return [availablePLaces, availableToEat, y, x, el]
            },
            rook: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = rookMove(availablePLaces, availableToEat, y, x, el)
                showChecked(availablePLaces, availableToEat, y, x, el)
                return args
            },
            knight: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = knightMove(availablePLaces, availableToEat, y, x, el)
                showChecked(availablePLaces, availableToEat, y, x, el)
                return args
            },
            bishop: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = bishopMove(availablePLaces, availableToEat, y, x, el)
                showChecked(availablePLaces, availableToEat, y, x, el)
                return args
            },
            queen: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = queenMove(availablePLaces, availableToEat, y, x, el)
                showChecked(availablePLaces, availableToEat, y, x, el)
                return args
            },
            king: (cordinates, el) => {
                clearShadows()
                let x = cordinates.x
                let y = cordinates.y
                let availablePLaces = []
                let availableToEat = []
                let args = kingMove(availablePLaces, availableToEat, y, x, el)
                showChecked(availablePLaces, availableToEat, y, x, el)
                return args
            },
        }
    }
    let turn = "white"
    let whiteKing = { y: 7, x: 4 }
    let blackKing = { y: 0, x: 4 }
    let whiteCastling = [true, true]
    let blackCastling = [true, true]
    board.addEventListener('click', (e) => {
        clearShadows()
        let el = e.target
        if (selectedPiece) {
            selectedPiece.style.boxShadow = "none"
        }
        selectedPiece = el
        if (el.className === "piece") {
            if (turn === "white" && el.dataset.color === "white") {
                moves[el.dataset.color][el.dataset.name]({ x: Number(el.dataset.x), y: Number(el.dataset.y) }, el)
                selectedPiece.style.boxShadow = "inset 0px 0px 20px cyan"
            }
            else if (turn === "black" && el.dataset.color === "black") {
                moves[el.dataset.color][el.dataset.name]({ x: Number(el.dataset.x), y: Number(el.dataset.y) }, el)
                selectedPiece.style.boxShadow = "inset 0px 0px 20px cyan"
            }
        }
    })


    function checkIfQueen(el, num) {
        let arr = [{
            src: `./${selectedFigures}/wq.png`,
            name: "queen"
        },
        {
            src: `./${selectedFigures}/wb.png`,
            name: "bishop"
        },
        {
            src: `./${selectedFigures}/wr.png`,
            name: "rook"
        },
        {
            src: `./${selectedFigures}/wn.png`,
            name: "knight"
        },]
        if (num == 7) {
            arr = [{
                src: `./${selectedFigures}/bq.png`,
                name: "queen"
            },
            {
                src: `./${selectedFigures}/bb.png`,
                name: "bishop"
            },
            {
                src: `./${selectedFigures}/br.png`,
                name: "rook"
            },
            {
                src: `./${selectedFigures}/bn.png`,
                name: "knight"
            },]
        }
        if (el.dataset.y == num) {
            let div = document.createElement('div')
            div.className = "choose"
            board.style.pointerEvents = "none"
            for (let i = 0; i < arr.length; i++) {
                let img = document.createElement('img')
                img.src = arr[i].src
                img.addEventListener('click', () => {
                    if(num==0){
                        if(time){
                            clearInterval(clock1)
                            clearInterval(clock2)
                            startClock2()
                            timeDiv1.style.opacity = "0.3"
                            timeDiv2.style.opacity = "1"
                        }
                    }
                    else if(num==7){
                        if(time){
                            clearInterval(clock2)
                            clearInterval(clock1)
                            startClock1()
                            timeDiv2.style.opacity = "0.3"
                            timeDiv1.style.opacity = "1"
                        }
                    }
                    el.src = arr[i].src
                    el.dataset.name = arr[i].name
                    cubes[el.dataset.y][el.dataset.x].name = el.dataset.name
                    board.style.pointerEvents = "auto"
                    div.style.display = "none"
                    checkAnime()
                })
                div.append(img)
                if(num==0){
                    if(time){
                        clearInterval(clock2)
                        clearInterval(clock1)
                        startClock1()
                        timeDiv2.style.opacity = "0.3"
                        timeDiv1.style.opacity = "1"
                    }
                }
                else if(num==7){
                    if(time){
                        clearInterval(clock1)
                        clearInterval(clock2)
                        startClock2()
                        timeDiv1.style.opacity = "0.3"
                        timeDiv2.style.opacity = "1"
                    }
                }
            }
            cont.append(div)

        }
    }

    function knightMove(arr1, arr2, y, x, el) {
        if (typeof cubes[y + 2] !== "undefined" && typeof cubes[x + 1] !== "undefined") {
            if (!cubes[y + 2][x + 1].piece) {
                arr1.push(cubes[y + 2][x + 1])
            }
            else if (cubes[y + 2][x + 1].color !== cubes[y][x].color) {
                arr2.push(cubes[y + 2][x + 1])
            }
        }
        if (typeof cubes[y + 2] !== "undefined" && typeof cubes[x - 1] !== "undefined") {
            if (!cubes[y + 2][x - 1].piece) {
                arr1.push(cubes[y + 2][x - 1])
            }
            else if (cubes[y + 2][x - 1].color !== cubes[y][x].color) {
                arr2.push(cubes[y + 2][x - 1])
            }
        }
        if (typeof cubes[y - 2] !== "undefined" && typeof cubes[x + 1] !== "undefined") {
            if (!cubes[y - 2][x + 1].piece) {
                arr1.push(cubes[y - 2][x + 1])
            }
            else if (cubes[y - 2][x + 1].color !== cubes[y][x].color) {
                arr2.push(cubes[y - 2][x + 1])
            }
        }
        if (typeof cubes[y - 2] !== "undefined" && typeof cubes[x - 1] !== "undefined") {
            if (!cubes[y - 2][x - 1].piece) {
                arr1.push(cubes[y - 2][x - 1])
            }
            else if (cubes[y - 2][x - 1].color !== cubes[y][x].color) {
                arr2.push(cubes[y - 2][x - 1])
            }
        }
        if (typeof cubes[y + 1] !== "undefined" && typeof cubes[x + 2] !== "undefined") {
            if (!cubes[y + 1][x + 2].piece) {
                arr1.push(cubes[y + 1][x + 2])
            }
            else if (cubes[y + 1][x + 2].color !== cubes[y][x].color) {
                arr2.push(cubes[y + 1][x + 2])
            }
        }
        if (typeof cubes[y + 1] !== "undefined" && typeof cubes[x - 2] !== "undefined") {
            if (!cubes[y + 1][x - 2].piece) {
                arr1.push(cubes[y + 1][x - 2])
            }
            else if (cubes[y + 1][x - 2].color !== cubes[y][x].color) {
                arr2.push(cubes[y + 1][x - 2])
            }
        }
        if (typeof cubes[y - 1] !== "undefined" && typeof cubes[x + 2] !== "undefined") {
            if (!cubes[y - 1][x + 2].piece) {
                arr1.push(cubes[y - 1][x + 2])
            }
            else if (cubes[y - 1][x + 2].color !== cubes[y][x].color) {
                arr2.push(cubes[y - 1][x + 2])
            }
        }
        if (typeof cubes[y - 1] !== "undefined" && typeof cubes[x - 2] !== "undefined") {
            if (!cubes[y - 1][x - 2].piece) {
                arr1.push(cubes[y - 1][x - 2])
            }
            else if (cubes[y - 1][x - 2].color !== cubes[y][x].color) {
                arr2.push(cubes[y - 1][x - 2])
            }
        }
        arr1.map(box => {
        })
        arr2.map(box => {
        })
        return [arr1, arr2, y, x, el]
    }

    function rookMove(arr1, arr2, y, x, el) {
        let i = y + 1
        while (typeof cubes[i] !== "undefined") {
            if (cubes[i][x].piece && cubes[i][x].color !== cubes[y][x].color) {
                arr2.push(cubes[i][x])
                break
            }
            else if (cubes[i][x].piece) {
                cubes[i][x].box.style.boxShadow = "none"
                break
            }
            arr1.push(cubes[i][x])
            i++
        }


        i = x + 1
        while (typeof cubes[y][i] !== "undefined") {
            if (cubes[y][i].piece && cubes[y][i].color !== cubes[y][x].color) {
                arr2.push(cubes[y][i])
                break
            }
            else if (cubes[y][i].piece) {
                cubes[y][i].box.style.boxShadow = "none"
                break
            }
            arr1.push(cubes[y][i])
            i++
        }


        i = y - 1
        while (typeof cubes[i] !== "undefined") {
            if (cubes[i][x].piece && cubes[i][x].color !== cubes[y][x].color) {
                arr2.push(cubes[i][x])
                break
            }
            else if (cubes[i][x].piece) {
                cubes[i][x].box.style.boxShadow = "none"
                break
            }
            arr1.push(cubes[i][x])
            i--
        }

        i = x - 1
        while (typeof cubes[y][i] !== "undefined") {
            if (cubes[y][i].piece && cubes[y][i].color !== cubes[y][x].color) {
                arr2.push(cubes[y][i])
                break
            }
            else if (cubes[y][i].piece) {
                cubes[y][i].box.style.boxShadow = "none"
                break
            }
            arr1.push(cubes[y][i])
            i--
        }
        return [arr1, arr2, y, x, el]
    }

    function bishopMove(arr1, arr2, y, x, el) {
        let i = y + 1
        let j = x + 1
        while (typeof cubes[i] !== "undefined" && typeof cubes[i][j] !== "undefined") {
            if (cubes[i][j].piece && cubes[i][j].color !== cubes[y][x].color) {
                arr2.push(cubes[i][j])
                break
            }
            else if (cubes[i][j].piece) {
                cubes[i][j].box.style.boxShadow = "none"
                break
            }
            arr1.push(cubes[i][j])
            i++
            j++
        }
        i = y - 1
        j = x - 1
        while (typeof cubes[i] !== "undefined" && typeof cubes[i][j] !== "undefined") {
            if (cubes[i][j].piece && cubes[i][j].color !== cubes[y][x].color) {
                arr2.push(cubes[i][j])
                break
            }
            else if (cubes[i][j].piece) {
                cubes[i][j].box.style.boxShadow = "none"
                break
            }
            arr1.push(cubes[i][j])
            i--
            j--
        }
        i = y + 1
        j = x - 1
        while (typeof cubes[i] !== "undefined" && typeof cubes[i][j] !== "undefined") {
            if (cubes[i][j].piece && cubes[i][j].color !== cubes[y][x].color) {
                arr2.push(cubes[i][j])
                break
            }
            else if (cubes[i][j].piece) {
                cubes[i][j].box.style.boxShadow = "none"
                break
            }
            arr1.push(cubes[i][j])
            i++
            j--
        }
        i = y - 1
        j = x + 1
        while (typeof cubes[i] !== "undefined" && typeof cubes[i][j] !== "undefined") {
            if (cubes[i][j].piece && cubes[i][j].color !== cubes[y][x].color) {
                arr2.push(cubes[i][j])
                break
            }
            else if (cubes[i][j].piece) {
                cubes[i][j].box.style.boxShadow = "none"
                break
            }
            arr1.push(cubes[i][j])
            i--
            j++
        }
        return [arr1, arr2, y, x, el]
    }

    function queenMove(arr1, arr2, y, x, el) {
        bishopMove(arr1, arr2, y, x, el)
        rookMove(arr1, arr2, y, x, el)
        return [arr1, arr2, y, x, el]
    }

    function kingMove(arr1, arr2, y, x, el, orignal = false) {
        if (typeof cubes[y][x + 1] !== "undefined") {
            if (cubes[y][x + 1].piece && cubes[y][x + 1].color !== cubes[y][x].color) {
                arr2.push(cubes[y][x + 1])
            }
            else if (!cubes[y][x + 1].piece) {
                arr1.push(cubes[y][x + 1])
            }
        }
        if (typeof cubes[y][x - 1] !== "undefined") {
            if (cubes[y][x - 1].piece && cubes[y][x - 1].color !== cubes[y][x].color) {
                arr2.push(cubes[y][x - 1])
            }
            else if (!cubes[y][x - 1].piece) {
                arr1.push(cubes[y][x - 1])
            }
        }
        if (typeof cubes[y + 1] !== "undefined") {
            if (cubes[y + 1][x].piece && cubes[y + 1][x].color !== cubes[y][x].color) {
                arr2.push(cubes[y + 1][x])
            }
            else if (!cubes[y + 1][x].piece) {
                arr1.push(cubes[y + 1][x])
            }
        }
        if (typeof cubes[y - 1] !== "undefined") {
            if (cubes[y - 1][x].piece && cubes[y - 1][x].color !== cubes[y][x].color) {
                arr2.push(cubes[y - 1][x])
            }
            else if (!cubes[y - 1][x].piece) {
                arr1.push(cubes[y - 1][x])
            }
        }
        if (typeof cubes[y + 1] !== "undefined" && typeof cubes[y + 1][x + 1] !== "undefined") {
            if (cubes[y + 1][x + 1].piece && cubes[y + 1][x + 1].color !== cubes[y][x].color) {
                arr2.push(cubes[y + 1][x + 1])
            }
            else if (!cubes[y + 1][x + 1].piece) {
                arr1.push(cubes[y + 1][x + 1])
            }
        }
        if (typeof cubes[y + 1] !== "undefined" && typeof cubes[y + 1][x - 1] !== "undefined") {
            if (cubes[y + 1][x - 1].piece && cubes[y + 1][x - 1].color !== cubes[y][x].color) {
                arr2.push(cubes[y + 1][x - 1])
            }
            else if (!cubes[y + 1][x - 1].piece) {
                arr1.push(cubes[y + 1][x - 1])
            }
        }
        if (typeof cubes[y - 1] !== "undefined" && typeof cubes[y - 1][x - 1] !== "undefined") {
            if (cubes[y - 1][x - 1].piece && cubes[y - 1][x - 1].color !== cubes[y][x].color) {
                arr2.push(cubes[y - 1][x - 1])
            }
            else if (!cubes[y - 1][x - 1].piece) {
                arr1.push(cubes[y - 1][x - 1])
            }
        }
        if (typeof cubes[y - 1] !== "undefined" && typeof cubes[y - 1][x + 1] !== "undefined") {
            if (cubes[y - 1][x + 1].piece && cubes[y - 1][x + 1].color !== cubes[y][x].color) {
                arr2.push(cubes[y - 1][x + 1])
            }
            else if (!cubes[y - 1][x + 1].piece) {
                arr1.push(cubes[y - 1][x + 1])
            }
        }
        //Castling check
        if (cubes[y][x].color === "white") {
            if (whiteCastling[0]) {
                let availableCastle = true

                if (orignal && check(whiteKing)) {
                    availableCastle = false
                }
                for (let i = 1; i < x; i++) {
                    if (cubes[7][i].piece) {
                        availableCastle = false
                        break
                    }
                }
                if (availableCastle) {
                    if (orignal) {
                        cubes[7][3].color = "white"
                        if (check({ y: 7, x: 3 })) {
                            availableCastle = false
                        }
                        cubes[7][3].color = null
                    }
                }
                if (availableCastle) {
                    arr1.push(cubes[7][2])
                }
            }
            if (whiteCastling[1]) {
                let availableCastle = true
                if (orignal && check(whiteKing)) {
                    availableCastle = false
                }
                for (let i = x + 1; i < 7; i++) {
                    if (cubes[7][i].piece) {
                        availableCastle = false
                        break
                    }
                }
                if (availableCastle) {
                    if (orignal) {
                        cubes[7][5].color = "white"
                        if (check({ y: 7, x: 5 })) {
                            availableCastle = false
                        }
                        cubes[7][5].color = null
                    }
                }
                if (availableCastle) {
                    arr1.push(cubes[7][6])
                }
            }
        }
        else if (cubes[y][x].color === "black") {
            if (blackCastling[0]) {
                let availableCastle = true
                if (orignal && check(blackKing)) {
                    availableCastle = false
                }
                for (let i = 1; i < x; i++) {
                    if (cubes[0][i].piece) {
                        availableCastle = false
                        break
                    }
                }
                if (availableCastle) {
                    if (orignal) {
                        cubes[0][3].color = "black"
                        if (check({ y: 0, x: 3 })) {
                            availableCastle = false
                        }
                        cubes[0][3].color = null
                    }
                }
                if (availableCastle) {
                    arr1.push(cubes[0][2])
                }
            }
            if (blackCastling[1]) {
                let availableCastle = true
                if (orignal && check(blackKing)) {
                    availableCastle = false
                }
                for (let i = x + 1; i < 7; i++) {
                    if (cubes[0][i].piece) {
                        availableCastle = false
                        break
                    }
                }
                if (availableCastle) {
                    if (orignal) {
                        cubes[0][5].color = "black"
                        if (check({ y: 0, x: 5 })) {
                            availableCastle = false
                        }
                        cubes[0][5].color = null
                    }
                }
                if (availableCastle) {
                    arr1.push(cubes[0][6])
                }
            }
        }
        return [arr1, arr2, y, x, el]
    }


    function addEvent(arr1, arr2, y, x, el) {
        showChecked(arr1, arr2, y, x, el)
        board.addEventListener('click', (e) => {
            if (arr1.includes(cubes[e.target.dataset.y][e.target.dataset.x])) {
                if(time){
                if (cubes[y][x].color == "white") {
                    clearInterval(clock1)
                    startClock2()
                    timeDiv1.style.opacity = "0.3"
                    timeDiv2.style.opacity = "1"
                }
                else if (cubes[y][x].color == "black") {
                    clearInterval(clock2)
                    startClock1()
                    timeDiv2.style.opacity = "0.3"
                    timeDiv1.style.opacity = "1"
                }
            }
                if (cubes[y][x].name === "king" && cubes[y][x].color === "white") {
                    if (e.target.dataset.x == 2 && whiteCastling[0]) {
                        cubes[7][3].name = cubes[7][0].name
                        cubes[7][3].color = cubes[7][0].color
                        cubes[7][3].piece = cubes[7][0].piece
                        cubes[7][3].box.append(cubes[7][3].piece)
                        cubes[7][3].piece.dataset.x = 3

                        cubes[7][0].name = null
                        cubes[7][0].color = null
                        cubes[7][0].piece = null
                    }
                    else if (e.target.dataset.x == 6 && whiteCastling[1]) {
                        cubes[7][5].name = cubes[7][7].name
                        cubes[7][5].color = cubes[7][7].color
                        cubes[7][5].piece = cubes[7][7].piece
                        cubes[7][5].box.append(cubes[7][5].piece)
                        cubes[7][5].piece.dataset.x = 5

                        cubes[7][7].name = null
                        cubes[7][7].color = null
                        cubes[7][7].piece = null
                    }
                    whiteCastling = [false, false]
                }
                else if (cubes[y][x].name === "king" && cubes[y][x].color === "black") {
                    if (e.target.dataset.x == 2 && blackCastling[0]) {
                        cubes[0][3].name = cubes[0][0].name
                        cubes[0][3].color = cubes[0][0].color
                        cubes[0][3].piece = cubes[0][0].piece
                        cubes[0][3].box.append(cubes[0][3].piece)
                        cubes[0][3].piece.dataset.x = 3
                        cubes[0][0].name = null
                        cubes[0][0].color = null
                        cubes[0][0].piece = null
                    }
                    else if (e.target.dataset.x == 6 && blackCastling[1]) {
                        cubes[0][5].name = cubes[0][7].name
                        cubes[0][5].color = cubes[0][7].color
                        cubes[0][5].piece = cubes[0][7].piece
                        cubes[0][5].box.append(cubes[0][5].piece)
                        cubes[0][5].piece.dataset.x = 5
                        cubes[0][7].name = null
                        cubes[0][7].color = null
                        cubes[0][7].piece = null
                    }
                    blackCastling = [false, false]
                }
                else if (whiteCastling[0] && x == 0 && cubes[y][x].name === "rook" && cubes[y][x].color === "white") {
                    whiteCastling[0] = false
                }
                else if (whiteCastling[1] && x == 7 && cubes[y][x].name === "rook" && cubes[y][x].color === "white") {
                    whiteCastling[1] = false
                }
                else if (blackCastling[0] && x == 0 && cubes[y][x].name === "rook" && cubes[y][x].color === "black") {
                    blackCastling[0] = false
                }
                else if (blackCastling[1] && x == 7 && cubes[y][x].name === "rook" && cubes[y][x].color === "black") {
                    blackCastling[1] = false
                }
                clearShadows()
                let place = cubes[e.target.dataset.y][e.target.dataset.x]
                place.piece = el
                place.name = cubes[y][x].name
                place.color = cubes[y][x].color
                place.box.append(place.piece)
                el.dataset.y = place.y
                el.dataset.x = place.x
                if (cubes[y][x].name === "king" && cubes[y][x].color === "white") {
                    whiteKing = { y: place.y, x: place.x }
                }
                else if (cubes[y][x].name === "king") {
                    blackKing = { y: place.y, x: place.x }
                }
                cubes[y][x].piece = null
                cubes[y][x].color = null
                cubes[y][x].name = null
                if (turn === "white") {
                    turn = "black"
                }
                else {
                    turn = "white"
                }
                weirdBlackPawn = null
                weirdWhitePawn = null
                checkAnime()
            }
            arr1 = []
            if (arr2.includes(cubes[e.target.dataset.y][e.target.dataset.x])) {
                if(time){
                if (cubes[y][x].color == "white") {
                    clearInterval(clock1)
                    startClock2()
                    timeDiv1.style.opacity = "0.3"
                    timeDiv2.style.opacity = "1"
                }
                else if (cubes[y][x].color == "black") {
                    clearInterval(clock2)
                    startClock1()
                    timeDiv2.style.opacity = "0.3"
                    timeDiv1.style.opacity = "1"
                }
            }
                if (cubes[y][x].name === "king" && cubes[y][x].color === "white") {
                    whiteCastling = [false, false]
                }
                else if (cubes[y][x].name === "king" && cubes[y][x].color === "black") {
                    blackCastling = [false, false]
                }
                else if (whiteCastling[0] && x == 0 && cubes[y][x].name === "rook" && cubes[y][x].color === "white") {
                    whiteCastling[0] = false
                }
                else if (whiteCastling[1] && x == 7 && cubes[y][x].name === "rook" && cubes[y][x].color === "white") {
                    whiteCastling[1] = false
                }
                else if (blackCastling[0] && x == 0 && cubes[y][x].name === "rook" && cubes[y][x].color === "black") {
                    blackCastling[0] = false
                }
                else if (blackCastling[1] && x == 7 && cubes[y][x].name === "rook" && cubes[y][x].color === "black") {
                    blackCastling[1] = false
                }
                clearShadows()
                let place = cubes[e.target.dataset.y][e.target.dataset.x]
                place.piece = el
                place.name = cubes[y][x].name
                place.color = cubes[y][x].color
                place.box.innerHTML = ``
                place.box.append(place.piece)
                el.dataset.y = place.y
                el.dataset.x = place.x
                if (cubes[y][x].name === "king" && cubes[y][x].color === "white") {
                    whiteKing = { y: place.y, x: place.x }
                }
                else if (cubes[y][x].name === "king") {
                    blackKing = { y: place.y, x: place.x }
                }
                cubes[y][x].piece = null
                cubes[y][x].color = null
                cubes[y][x].name = null
                if (turn === "white") {
                    turn = "black"
                }
                else {
                    turn = "white"
                }
                weirdBlackPawn = null
                weirdWhitePawn = null
                checkAnime()
            }
            arr2 = []
        })
        return { y: y, x: x }
    }



    function check(cord) {
        isWhiteCheck = false
        isBlackCheck = false
        let y = cord.y
        let x = cord.x
        let checkChars = []
        //check for pawn
        if (cubes[y][x].color === "white") {
            if (typeof cubes[y - 1] !== "undefined" && typeof cubes[y - 1][x - 1] !== "undefined" && cubes[y - 1][x - 1].color === "black" && (cubes[y - 1][x - 1].name === "pawn")) {
                isWhiteCheck = true
                return true
            }
            if (typeof cubes[y - 1] !== "undefined" && typeof cubes[y - 1][x + 1] !== "undefined" && cubes[y - 1][x + 1].color === "black" && (cubes[y - 1][x + 1].name === "pawn")) {
                isWhiteCheck = true
                return true
            }
        }
        else {
            if (typeof cubes[y + 1] !== "undefined" && typeof cubes[y + 1][x - 1] !== "undefined" && cubes[y + 1][x - 1].color === "white" && (cubes[y + 1][x - 1].name === "pawn")) {
                isBlackCheck = true
                return true
            }
            if (typeof cubes[y + 1] !== "undefined" && typeof cubes[y + 1][x + 1] !== "undefined" && cubes[y + 1][x + 1].color === "white" && (cubes[y + 1][x + 1].name === "pawn")) {
                isBlackCheck = true
                return true
            }
        }
        //check for king
        let res = kingMove([], checkChars, y, x, cubes[y][x].piece)[1]
        for (let i = 0; i < res.length; i++) {
            if ((res[i].color !== cubes[y][x].color) && (res[i].name === "king")) {
                if (cubes[y][x].color === "white") {
                    isWhiteCheck = true
                    return true
                }
                else {
                    isBlackCheck = true
                    return true
                }
            }
        }

        //check for bishop
        checkChars = []
        res = bishopMove([], checkChars, y, x, cubes[y][x].piece)[1]
        for (let i = 0; i < res.length; i++) {
            if ((res[i].color !== cubes[y][x].color) && (res[i].name === "bishop" || res[i].name === "queen")) {
                if (cubes[y][x].color === "white") {
                    isWhiteCheck = true
                    return true
                }
                else {
                    isBlackCheck = true
                    return true
                }
            }
        }
        //check for rook
        checkChars = []
        res = rookMove([], checkChars, y, x, cubes[y][x].piece)[1]
        for (let i = 0; i < res.length; i++) {
            if ((res[i].color !== cubes[y][x].color) && (res[i].name === "rook" || res[i].name === "queen")) {
                if (cubes[y][x].color === "white") {
                    isWhiteCheck = true
                    return true
                }
                else {
                    isBlackCheck = true
                    return true
                }
            }
        }
        //check for knight
        checkChars = []
        res = knightMove([], checkChars, y, x, cubes[y][x].piece)[1]
        for (let i = 0; i < res.length; i++) {
            if ((res[i].color !== cubes[y][x].color) && (res[i].name === "knight")) {
                if (cubes[y][x].color === "white") {
                    isWhiteCheck = true
                    return true
                }
                else {
                    isBlackCheck = true
                    return true
                }
            }
        }
        // isWhiteCheck = false
        // isBlackCheck = false
        return false
    }

    let arrMate = []

    function showChecked(arr1, arr2, y, x, el) {
        for (let i = 0; i < arr1.length; i++) {
            let place = arr1[i]
            place.piece = el
            place.name = cubes[y][x].name
            place.color = cubes[y][x].color
            place.box.append(place.piece)
            el.dataset.y = place.y
            el.dataset.x = place.x
            if (cubes[y][x].name === "king" && cubes[y][x].color === "white") {
                whiteKing = { y: place.y, x: place.x }
            }
            else if (cubes[y][x].name === "king") {
                blackKing = { y: place.y, x: place.x }
            }
            cubes[y][x].piece = null
            cubes[y][x].color = null
            cubes[y][x].name = null


            if (el.dataset.color === "white" && check(whiteKing)) {
                arr1.splice(i, 1)
                i--
            }
            else if (el.dataset.color === "black" && check(blackKing)) {
                arr1.splice(i, 1)
                i--
            }
            else {
                arr1[i].box.style.boxShadow = "inset 0px 0px 20px cyan"
            }

            if (place.name === "king" && place.color === "white") {
                whiteKing = { y: y, x: x }
            }
            else if (place.name === "king") {
                blackKing = { y: y, x: x }
            }
            el.dataset.y = y
            el.dataset.x = x
            cubes[y][x].piece = el
            cubes[y][x].color = place.color
            cubes[y][x].name = place.name
            cubes[y][x].box.append(el)
            place.piece = null
            place.name = null
            place.color = null
            place = null
            arrMate.push(arr1[i])
        }
        for (let i = 0; i < arr2.length; i++) {
            let wasKing = false
            let backUp = { ...arr2[i] }
            let place = arr2[i]
            place.piece = el
            place.name = cubes[y][x].name
            place.color = cubes[y][x].color
            place.box.append(place.piece)
            el.dataset.y = place.y
            el.dataset.x = place.x
            if (cubes[y][x].name === "king" && cubes[y][x].color === "white") {
                whiteKing = { y: place.y, x: place.x }
                wasKing = true
            }
            else if (cubes[y][x].name === "king") {
                blackKing = { y: place.y, x: place.x }
                wasKing = true
            }
            cubes[y][x].piece = null
            cubes[y][x].color = null
            cubes[y][x].name = null
            if (el.dataset.color === "white" && check(whiteKing)) {
                arr2.splice(i, 1)
                i--
            }
            else if (el.dataset.color === "black" && check(blackKing)) {
                arr2.splice(i, 1)
                i--
            }
            else {
                arr2[i].box.style.boxShadow = "inset 0px 0px 20px red"
            }


            if (place.name === "king" && place.color === "white") {
                whiteKing = { y: y, x: x }
            }
            else if (place.name === "king") {
                blackKing = { y: y, x: x }
            }


            el.dataset.y = y
            el.dataset.x = x
            cubes[y][x].piece = el
            cubes[y][x].color = place.color
            cubes[y][x].name = place.name
            cubes[y][x].box.append(el)
            place.piece = backUp.piece
            place.name = backUp.name
            place.color = backUp.color
            arrMate.push(arr2[i])
        }
    }


    function checkMate(king) {
        let defensiveMoves = []
        for (let y = 0; y < cubes.length; y++) {
            for (let x = 0; x < cubes[y].length; x++) {
                if (cubes[y][x].color === cubes[king.y][king.x].color) {
                    let res = moves2[cubes[y][x].color][cubes[y][x].name]({ x: x, y: y }, cubes[y][x].piece)
                    if (res[0].length !== 0) {
                        defensiveMoves.push(res[0])
                    }
                    else if (res[1].length !== 0) {
                        defensiveMoves.push(res[1])
                    }
                }
            }
        }
        clearShadows()
        if (defensiveMoves.length === 0) {
            return true
        }
        return false
    }


    function checkAnime() {
        // Check or CheckMate
        if (check(whiteKing)) {
            cubes[whiteKing.y][[whiteKing.x]].piece.style.animation = "gago"
            cubes[whiteKing.y][[whiteKing.x]].piece.style.animationDuration = "0.2s"
            cubes[whiteKing.y][[whiteKing.x]].piece.style.animationIterationCount = "infinite"
            if (checkMate(whiteKing)) {
                title.innerText = "CheckMate"
                for (let y = 0; y < cubes.length; y++) {
                    for (let x = 0; x < cubes[y].length; x++) {
                        if (cubes[y][x].color === "white") {
                            cubes[y][x].piece.style.animation = "lose"
                            cubes[y][x].piece.style.animationDuration = "0.5s"
                            cubes[y][x].piece.style.animationIterationCount = "infinite"
                        }
                    }
                }
                setTimeout(() => {
                    for (let y = 0; y < cubes.length; y++) {
                        for (let x = 0; x < cubes[y].length; x++) {
                            if (cubes[y][x].color === "white") {
                                cubes[y][x].piece.style.display = "none"
                            }
                        }
                    }
                }, 3470)
                setTimeout(() => {
                    window.location.reload()
                }, 5000)
                return null
            }
        }
        else {
            cubes[whiteKing.y][[whiteKing.x]].piece.style.animation = "none"
        }

        if (check(blackKing)) {
            cubes[blackKing.y][[blackKing.x]].piece.style.animation = "gago"
            cubes[blackKing.y][[blackKing.x]].piece.style.animationDuration = "0.2s"
            cubes[blackKing.y][[blackKing.x]].piece.style.animationIterationCount = "infinite"
            if (checkMate(blackKing)) {
                title.innerText = "CheckMate"
                for (let y = 0; y < cubes.length; y++) {
                    for (let x = 0; x < cubes[y].length; x++) {
                        if (cubes[y][x].color === "black") {
                            cubes[y][x].piece.style.animation = "lose"
                            cubes[y][x].piece.style.animationDuration = "0.5s"
                            cubes[y][x].piece.style.animationIterationCount = "infinite"
                        }
                    }
                }
                setTimeout(() => {
                    for (let y = 0; y < cubes.length; y++) {
                        for (let x = 0; x < cubes[y].length; x++) {
                            if (cubes[y][x].color === "black") {
                                cubes[y][x].piece.style.display = "none"
                            }
                        }
                    }
                }, 3470)
                setTimeout(() => {
                    window.location.reload()
                }, 5000)
                return null
            }
        }
        else {
            cubes[blackKing.y][[blackKing.x]].piece.style.animation = "none"
        }

        //Stalemate
        if (checkMate(blackKing) || checkMate(whiteKing)) {
            title.innerText = "StaleMate"
            for (let y = 0; y < cubes.length; y++) {
                for (let x = 0; x < cubes[y].length; x++) {
                    if (cubes[y][x].name) {
                        cubes[y][x].piece.style.animation = "lose"
                        cubes[y][x].piece.style.animationDuration = "0.5s"
                        cubes[y][x].piece.style.animationIterationCount = "infinite"
                    }
                }
            }
            setTimeout(() => {
                for (let y = 0; y < cubes.length; y++) {
                    for (let x = 0; x < cubes[y].length; x++) {
                        if (cubes[y][x].piece) {
                            cubes[y][x].piece.style.display = "none"
                        }
                    }
                }
            }, 3470)
            setTimeout(() => {
                window.location.reload()
            }, 5000)
            return null
        }
    }

}

// startGame()

function reload(){
    window.location.reload()
}