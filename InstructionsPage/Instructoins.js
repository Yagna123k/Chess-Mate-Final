var next = document.getElementById('next')
let click = new Audio('./../assets/clicksound.wav')


next.addEventListener('click', ()=>{
    click.play()
    window.location.href = './../PreferencePage/Preference.html'
})