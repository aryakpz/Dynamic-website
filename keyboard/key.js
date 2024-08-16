const letters = document.querySelectorAll('.letter');
const textarea = document.getElementById('content');

const clickel = document.querySelector('.click');
const keyel = document.querySelector('.keys')

const spaceel = document.querySelector('#space')
const backel = document.querySelector("#back")



const infoel = document.querySelector('.info')

const subel = document.querySelector('.sub')


let index = 0
var ar = []
let movetime, displaytime;
let f = 0
function display() {


    // const crnt = letters[index].textContent
    // console.log(crnt)
    if (letters[index].textContent === "Backspace ") {

        textarea.value = textarea.value.slice(0, -1)
    }

    else if (letters[index].textContent === "space") {

        textarea.value += '  '

    }
    else if (letters[index].textContent === "Tab") {
        textarea.value += '     '
    }
    else if (letters[index].textContent === "Enter") {
        textarea.value += '\n'
    }

    else if (letters[index].textContent === "CapsLk") {
        if (f == 0) {
            f = 1
        }
        else {
            f = 0
        }
    }
    else if (letters[index].textContent === "Fn" || letters[index].textContent === "Cntrl" || letters[index].textContent === "alt" || letters[index].textContent === "Shift" || letters[index].textContent === "AltGr") {
        textarea.value += ''
    }
    else {

        if (f == 1) {
            textarea.value += letters[index].textContent.toUpperCase()
        }
        else {
            textarea.value += letters[index].textContent.toLowerCase()
        }
    }
    
}    

function move() {

    letters[index].style.backgroundColor = 'white'

    index = (index + 1)
    if (index >= letters.length) {
        index = 0
    }
    letters[index].style.backgroundColor = 'skyblue'

    console.log(letters[index].textContent)
}


       
clickel.addEventListener('mouseover', () => {
    movetime = setInterval(move, 1000)

})


clickel.addEventListener('click', () => {

    display()

}, 1000)

clickel.addEventListener('mouseleave', () => {
    clearInterval(movetime)

})

infoel.addEventListener('click', () => {
    subel.style.display = subel.style.display === 'block' ? 'none' : 'block'

})
