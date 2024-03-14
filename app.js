const grid = document.querySelector('.grid');
let numGrid=16
let btnContainer=document.querySelector('.container')
let reset=document.createElement('BUTTON')
reset.textContent='Reset'
reset.style.marginRight="1rem"
let newbutton=document.createElement('BUTTON')
newbutton.textContent='New'
newbutton.style.marginRight="1rem"
let randombtn=document.createElement('button')
randombtn.textContent='Random Colors'
btnContainer.appendChild(reset)
btnContainer.appendChild(newbutton)
btnContainer.appendChild(randombtn)
btnContainer.style.cssText='width: 40%; margin: 2rem auto; text-align: center; '

grid.style.cssText=`grid-template-rows: repeat(${numGrid}, 1fr); grid-template-columns: repeat(${numGrid}, 1fr);`

// Use a nested for loop to create the grid cells

gridFormulator(numGrid)

let celldivs=document.querySelectorAll('.cell')
celldivs.forEach((celldiv) => {
    let num=250
    celldiv.addEventListener('mouseover', () => {
        celldiv.style.backgroundColor=`rgb(${num},${num},${num})`
        num = num - 25;
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
        let num=250
        celldiv.addEventListener('mouseover', () => {
            celldiv.style.backgroundColor=`rgb(${num},${num},${num})`
            num = num - 25;
        })    
    })
})


randombtn.addEventListener('click',() => {

    randombtn.classList.toggle('btn-toggle')
    let classTest= randombtn.classList.contains('btn-toggle')
    if (classTest){
        let celldivss=document.querySelectorAll('.cell')
        celldivss.forEach((celldiv) => {
            // celldiv.style.backgroundColor=`white`
            let red=getRandom()
            let blue=getRandom()
            let green=getRandom()
            celldiv.addEventListener('mouseover', () => {
                celldiv.style.backgroundColor=`rgb(${red},${green},${blue})`
                red=red - 15
                green= green - 15
                blue= blue - 15
            })    
        })
    }
    else {
        let celldivss=document.querySelectorAll('.cell')
        celldivss.forEach((celldiv) => {
            // celldiv.style.backgroundColor=`white`
            let num=250
            celldiv.addEventListener('mouseover', () => {
                celldiv.style.backgroundColor=`rgb(${num},${num},${num})`
                num= num -25
            })    
        })
    }
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




