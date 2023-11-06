var play = document.querySelectorAll(".play")

play.forEach(btn => {
    btn.onclick = ()=>{
        window.location.href = './../InstructionsPage/Instructions.html';
    }
});

var Name = document.getElementsByClassName('gamename')

Name.onclick = ()=>{
    window.location.href = 'Home.html'
}
