const grid = document.querySelector('.grid');
let numGrid=16
let btnContainer=document.querySelector('.container')
let reset=document.createElement('BUTTON')
reset.textContent='Reset'
let newbutton=document.createElement('BUTTON')
newbutton.textContent='New'
btnContainer.appendChild(reset)
btnContainer.appendChild(newbutton)
btnContainer.style.cssText='width: 40%; margin: 2rem auto; text-align: center; '

grid.style.cssText=`grid-template-rows: repeat(${numGrid}, 1fr); grid-template-columns: repeat(${numGrid}, 1fr);`

// Use a nested for loop to create the grid cells

gridFormulator(numGrid)

let celldivs=document.querySelectorAll('.cell')
celldivs.forEach((celldiv) => {
    celldiv.addEventListener('mouseover', () => {
        celldiv.style.backgroundColor=`rgb(${getRandom()},${getRandom()},${getRandom()})`
    })    
})

function gridFormulator(numGrid){
    for (let i = 0; i < numGrid; i++) {
        for (let j = 0; j < numGrid; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
        }
    }
}

newbutton.addEventListener('click', ()=> {
    do{
        numGrid=parseInt(prompt('enter a number between 1 and 100 to generate a grid'))
    }while(numGrid < 1 || numGrid > 100)
    let celldivs=document.querySelectorAll('.cell')
    celldivs.forEach((celldiv)=>{
        grid.removeChild(celldiv)
    })
    grid.style.cssText=`grid-template-rows: repeat(${numGrid}, 1fr); grid-template-columns: repeat(${numGrid}, 1fr);`
    gridFormulator(numGrid)

    let celldivss=document.querySelectorAll('.cell')
    celldivss.forEach((celldiv) => {
        celldiv.addEventListener('mouseover', () => {
            celldiv.style.backgroundColor=`rgb(${getRandom()},${getRandom()},${getRandom()})`
        })    
    })
})

function getRandom(){
    random= Math.floor(Math.random() * 256)
    return random
}

reset.addEventListener('click', () => {
    let celldivs=document.querySelectorAll('.cell')
    celldivs.forEach((celldiv)=>{
        celldiv.style.backgroundColor=`white`
    })
})




