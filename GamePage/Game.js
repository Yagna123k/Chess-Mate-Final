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
            color.style.backgroundColor = '#F2F2F2'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = '#ffffff'
        }
    })
}
colorBoxes()

// Inserting the Images
function insertImages() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="./../assets/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
                
            }
            else {
                image.innerHTML = `${image.innerText} <img class='allimg' src="./../assets/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImages()