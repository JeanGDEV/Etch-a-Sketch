const container = document.querySelector(".container")
const resetBtn = document.querySelector(".reset-btn")


const containerWidth = 960

const size = containerWidth / 16

initializeGrid()


function initializeGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
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


