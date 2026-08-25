const container = document.querySelector(".container")
const resetBtn = document.querySelector(".reset-btn")


const containerWidth = 960

let newGridPrompt = 16

initializeGrid()

resetBtn.addEventListener("click", () => newGrid())

function initializeGrid() {
    let size = containerWidth / newGridPrompt
    for (let i = 0; i < newGridPrompt; i++) {
        for (let j = 0; j < newGridPrompt; j++) {
            const square = document.createElement("div")
            container.appendChild(square)
            square.style.width = `${size}px`
            square.style.height = `${size}px`
            square.style.backgroundColor = "#222"
            square.style.border = "1px solid black"
            square.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "tomato"
            })
        }
    }  
}

function newGrid() {
    const userInput = prompt("Enter a grid number")
    if(!isValid(userInput)) {
        alert("Invalid number. Try again")
        return
    }

    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }

    newGridPrompt = parseInt(userInput)
    initializeGrid()
}

function isValid(input) {
    if(input === null) return false
    if (input.trim() === "") return false

    const number = Number(input)

    if (isNaN(number)) return false
    if (!Number.isInteger(number)) return false
    if (number < 1 || number > 100) return false

    // if everything is good, return true

    return true
}

