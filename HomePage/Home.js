// Audio Part

let bgm = new Audio('./../assets/backgroundmusic.mp3')

bgm.play()
bgm.loop = true

var play = document.querySelectorAll(".play")

let click = new Audio('./../assets/clicksound.wav')

play.forEach(btn => {
    btn.onclick = ()=>{
        click.pause()
        click.play()
        window.location.href = './../InstructionsPage/Instructions.html';
    }
});

var Name = document.getElementsByClassName('gamename')

Name.onclick = ()=>{
    window.location.href = 'Home.html'
}

