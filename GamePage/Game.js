var home = document.getElementById('home')
var inst = document.getElementById('inst')
var restart = document.getElementById('restart')


home.addEventListener('click', ()=>{
    clicksound()
    window.location.href = './../HomePage/Home.html'
})

inst.addEventListener('click', ()=>{
    clicksound()
    window.location.href = './../InstructionsPage/Instructions.html'
})

restart.addEventListener('click', ()=>{
    clicksound()
    var Time = localStorage.getItem('time')
    window.location.href = './Game.html'
})

var homebtn = document.getElementById('homebtn')
var replay = document.getElementById('replay')

homebtn.addEventListener('click', ()=>{
    clicksound()
    window.location.href = './../HomePage/Home.html'
})

replay.addEventListener('click', ()=>{
    clicksound()
    var Time = localStorage.getItem('time')
    window.location.href = './Game.html'
})

var moves = 0

movediv = document.getElementById('move')
movediv.innerHTML = `${moves}`


var p1name = localStorage.getItem('p1name')
var p1nick = localStorage.getItem('p1nick')

var p2name = localStorage.getItem('p2name')
var p2nick = localStorage.getItem('p2nick')


function gameover(){
    bgm.pause()
    var gover = document.getElementById('gameover')
    console.log(gover)
    gover.style.display = 'flex'
}

// Color codes
var lightb = 'rgb(211, 196, 255)'
var darkb = 'rgb(121, 69, 227)'
var lightr = 'rgb(241, 128, 126)'
var white = 'rgb(255, 255, 255)'
var lwhite = 'rgb(242, 242, 242)'
var aqua = 'aqua'

//colorBoxes
function colorBoxes() {
    const color = document.querySelectorAll('.box')
    color.forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = lwhite
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = white
        }
    })
}
colorBoxes()

// Inserting the imgs
function insertimgs() {
    document.querySelectorAll('.box').forEach(img => {
        img.style.cursor = 'pointer'
        if (img.innerText.length !== 0) {
            if (img.innerText == 'Wpawn' || img.innerText == 'Bpawn') {
                img.innerHTML = `${img.innerText} <img class='allimg allpawn' src="./../assets/${img.innerText}.png" alt="">`
            }
            else {
                img.innerHTML = `${img.innerText} <img class='allimg' src="./../assets/${img.innerText}.png" alt="">`
            }
        }
    })
}
insertimgs()

//Remove borders
function removebdr(){
    document.querySelectorAll('.box').forEach(item =>{
        item.style.border = 'none'
    })
}

//function to not remove the same team element

function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == lightb) {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == darkb && i2.innerText.length !== 0) {

                    violetText = i2.innerText
                    blueText = i1.innerText

                    blueColor = ((Array.from(blueText)).shift()).toString()
                    violetColor = ((Array.from(violetText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if (a % 2 == 0 && blueColor == violetColor) {
                        i2.style.backgroundColor = lwhite
                    }
                    if (a % 2 !== 0 && blueColor == violetColor) {
                        i2.style.backgroundColor = white
                    }

                    if (blueColor != violetColor) {
                        i2.style.backgroundColor = lightr
                        i2.style.border = '2px solid red'
                    }
                }
            })
        }
    })
}


tog = 1
whiteCastleChance=true
blackCastleChance=true
var container = document.getElementById('container')
document.querySelectorAll('.box').forEach(item => {

    item.addEventListener('click', function () {

        if (item.style.backgroundColor == darkb && item.innerText.length == 0) {
            tog = tog + 1
            moves += 1
            movesound()
        }
        else if (item.style.backgroundColor == 'aqua' && item.innerText.length == 0) {
            tog = tog + 1
            moves += 1
            movesound()
        }
        // To delete the opposite element
        else if (item.style.backgroundColor == lightr && item.innerText.length !== 0) {

            killsound()

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == lightb) {
                    blueId = i.id
                    blueText = i.innerText

                    document.getElementById(blueId).innerText = ''
                    item.innerText = blueText
                    colorBoxes()
                    insertimgs()
                    removebdr()
                    tog = tog + 1
                    moves += 1
                }
            })
        }
        movediv.innerHTML = `${moves}`

        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup

        // Function to display the available paths for all pieces
        function whosTurn(toggle) {

            // PAWN
            if (item.innerText == `${toggle}pawn`) {
                item.style.backgroundColor = lightb

                if (tog % 2 !== 0 && aup < 800) {

                    if (aup == 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = darkb
                        if (aup == 200 && document.getElementById(`b${a + 200}`).innerText.length == 0) {
                            document.getElementById(`b${a + 200}`).style.backgroundColor = darkb
                        }
                    }

                    if (aup !== 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = darkb
                    }

                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = darkb
                    }

                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = darkb

                    }
                    if (aup == 800) {
                        document.getElementById(`b${a}`).innerText = 'Wqueen'
                        colorBoxes()
                        insertimgs()
                        removebdr()
                    }
                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length == 0 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = darkb
                    }

                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length == 0 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = darkb

                    }
                }

                if (tog % 2 == 0 && aup > 100) {

                    if (aup == 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = darkb
                        if (aup == 700 && document.getElementById(`b${a - 200}`).innerText.length == 0) {
                            document.getElementById(`b${a - 200}`).style.backgroundColor = darkb
                        }
                    }

                    if (aup !== 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = darkb
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = darkb
                    }
                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = darkb

                    }
                }
            }

            // KING

            if (item.innerText == `${toggle}king`) {

                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = darkb
                }
                if (aside > 1) {
                    document.getElementById(`b${a - 1}`).style.backgroundColor = darkb
                }
                if (aup < 800) {
                    document.getElementById(`b${a + 100}`).style.backgroundColor = darkb
                }
                if (aup > 100) {
                    document.getElementById(`b${a - 100}`).style.backgroundColor = darkb
                }
                if (aup > 100 && aside < 8) {
                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = darkb
                }

                if (aup > 100 && aside > 1) {
                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = darkb
                }
                if (aup < 800 && aside < 8) {
                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = darkb
                }
                if (aup < 800 && aside > 1) {
                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = darkb
                }
                
                if(whiteCastleChance==true && a==105 && document.getElementById('b106').innerText== '' && document.getElementById('b107').innerText== '' && document.getElementById('b108').innerText== 'Wrook'){
                    document.getElementById(`b107`).style.backgroundColor = 'aqua'
                }
                if(whiteCastleChance==true && a==105 && document.getElementById('b104').innerText== '' && document.getElementById('b103').innerText== '' && document.getElementById('b102').innerText== '' && document.getElementById('b101').innerText== 'Wrook'){
                    document.getElementById(`b103`).style.backgroundColor = 'aqua'
                }
                if(blackCastleChance==true && a==805 && document.getElementById('b806').innerText== '' && document.getElementById('b807').innerText== '' && document.getElementById('b808').innerText== 'Brook'){
                    document.getElementById(`b807`).style.backgroundColor = 'aqua'
                }
                if(blackCastleChance==true && a==805 && document.getElementById('b804').innerText== '' && document.getElementById('b803').innerText== '' && document.getElementById('b802').innerText== '' && document.getElementById('b801').innerText== 'Brook'){
                    document.getElementById(`b803`).style.backgroundColor = 'aqua'
                }
                item.style.backgroundColor = lightb
            }

            // ROOK

            if (item.innerText == `${toggle}rook`) {

                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = darkb
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = darkb
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = darkb
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = darkb
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = darkb
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = darkb
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = darkb
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = darkb
                        break
                    }
                }

                item.style.backgroundColor = lightb
            }

            // KNIGHT

            if (item.innerText == `${toggle}knight`) {

                if (aside < 7 && aup < 800) {
                    document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = darkb
                }
                if (aside < 7 && aup > 200) {
                    document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = darkb
                }
                if (aside < 8 && aup < 700) {
                    document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = darkb
                }
                if (aside > 1 && aup < 700) {
                    document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = darkb
                }
                if (aside > 2 && aup < 800) {
                    document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = darkb
                }
                if (aside > 2 && aup > 100) {
                    document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = darkb
                }
                if (aside < 8 && aup > 200) {
                    document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = darkb
                }
                if (aside > 1 && aup > 200) {
                    document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = darkb
                }

                item.style.backgroundColor = lightb

            }

            // BISHOP

            if (item.innerText == `${toggle}bishop`) {

                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = darkb
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = darkb
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = darkb
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = darkb
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = darkb
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = darkb
                        break
                    }

                }

                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = darkb
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = darkb
                        break
                    }
                }

                item.style.backgroundColor = lightb

            }

            // QUEEN

            if (item.innerText == `${toggle}queen`) {

                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = darkb
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = darkb
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = darkb
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = darkb
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = darkb
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = darkb
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = darkb
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = darkb
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = darkb
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = darkb
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = darkb
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = darkb
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = darkb
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = darkb
                        break
                    }

                }

                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = darkb
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = darkb
                        break
                    }
                }

                item.style.backgroundColor = lightb
            }

        }

        // Toggling the turn
        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = `${p1nick}'s Turn`
            whosTurn('W')
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = `${p2nick}'s Turn`
            whosTurn('B')
        }
        reddish()

        // winning()
        numOfKings = 0
        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Wking' || win.innerText == 'Bking') {
                numOfKings += 1
            }
        })

        if (numOfKings == 1) {
            setTimeout(() => {
                // console.log(`${toggle}`) 
                if (tog % 2 == 0) {
                    var winner = document.getElementById('winner')
                    winner.textContent = `${p1name} Won the Game`
                    gameover()
                }
                else if (tog % 2 !== 0) {
                    var winner = document.getElementById('winner')
                    winner.textContent = `${p2name} Won the Game`
                    gameover() 
                }
            }, 100)
        }
    })
})

// Moving the element
document.querySelectorAll('.box').forEach(item => {

    item.addEventListener('click', function () {

        if (item.style.backgroundColor == lightb) {
            
            clicksound()

            item.style.border = '2px solid #7F4EE2'
            blueId = item.id
            blueText = item.innerText

            document.querySelectorAll('.box').forEach(item2 => {

                item2.addEventListener('click', function () {

                    getId = item2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    arr.push('0')
                    aup = eval(arr.join(''))
                    a = aside + aup

                    if (item2.style.backgroundColor == darkb || item2.style.backgroundColor == lightr) {
                        if (blueText == 'Wpawn' && aup == 800) {
                            item2.innerText = 'Wqueen'
                            colorBoxes()
                            insertimgs()
                            removebdr()
                        }
                        else if (blueText == 'Bpawn' && aup == 100) {
                            document.getElementById(`b${a}`).innerText = 'Bqueen'
                            document.getElementById(blueId).innerText = ''
                            colorBoxes()
                            insertimgs()
                            removebdr()
                        }
                        else {
                            document.getElementById(blueId).innerText = ''
                            item2.innerText = blueText
                            colorBoxes()
                            insertimgs()
                            removebdr()
                        }
                    }

                    else if (item2.style.backgroundColor == 'aqua') {
                        if(item2.id=='b103'){
                            document.getElementById('b101').innerText = ''
                            document.getElementById('b102').innerText = ''
                            document.getElementById('b103').innerText = 'Wking'
                            document.getElementById('b104').innerText = 'Wrook'
                            document.getElementById('b105').innerText = ''
                            document.getElementById(blueId).innerText = ''
                            whiteCastleChance=false
                            colorBoxes()
                            insertimgs()
                            removebdr()
                        }
                        else if(item2.id=='b107'){
                            document.getElementById('b105').innerText = ''
                            document.getElementById('b106').innerText = 'Wrook'
                            document.getElementById('b107').innerText = 'Wking'
                            document.getElementById('b108').innerText = ''
                            document.getElementById(blueId).innerText = ''
                            whiteCastleChance=false
                            colorBoxes()
                            insertimgs()
                            removebdr()
                        }
                        else if(item2.id=='b803'){
                            document.getElementById('b801').innerText = ''
                            document.getElementById('b802').innerText = ''
                            document.getElementById('b803').innerText = 'Bking'
                            document.getElementById('b804').innerText = 'Brook'
                            document.getElementById('b805').innerText = ''
                            document.getElementById(blueId).innerText = ''
                            blackCastleChance=false
                            colorBoxes()
                            insertimgs()
                            removebdr()
                        }
                        else if(item2.id=='b807'){
                            document.getElementById('b805').innerText = ''
                            document.getElementById('b806').innerText = 'Brook'
                            document.getElementById('b807').innerText = 'Bking'
                            document.getElementById('b808').innerText = ''
                            document.getElementById(blueId).innerText = ''
                            blackCastleChance=false
                            colorBoxes()
                            insertimgs()
                            removebdr()
                        }
                    }
                })
            })
        }
    })
})

// Prvents from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== darkb && ee.style.backgroundColor !== 'aqua') {
            colorBoxes()
            removebdr()
        }
    })
})


let interval
var Time = localStorage.getItem('time')
var timer = document.getElementById('time')
time.textContent = Time
interval = setInterval(()=>{
    Time--;
    timer.textContent = Time

    if (Time == 0){
        clearInterval(interval)
        var winner = document.getElementById('winner')
        winner.textContent = `Draw Time up`
        gameover()
    }
},60000)

let bgm = new Audio('./../assets/backgroundmusic.mp3')

bgm.play()
bgm.loop = true

function clicksound(){
    let music = new Audio('./../assets/clicksound.wav')
    music.pause()
    music.play()
}
function killsound(){
    let music = new Audio('./../assets/killsound.wav')
    music.pause()
    music.play()
}
function movesound(){
    let music = new Audio('./../assets/movesound.wav')
    music.pause()
    music.play()
}
