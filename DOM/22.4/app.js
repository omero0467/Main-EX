const player1 = document.querySelector('#player1-race > td.active');
const player2 = document.querySelector('#player2-race > td.active');
const tableRow1 = document.querySelector('#player1-race')
const tableRow2 = document.querySelector('#player2-race')
const winner = document.querySelector('.winner')


let variable = 0;
let variable2 = 0;
document.addEventListener('keyup',e =>{
    console.log(e.key);
    if(e.key === 'ArrowRight' && variable<=tableRow1.lastElementChild.cellIndex-1) {
        variable ++ 
        const myTable = tableRow1.children
        myTable[variable].classList.add('active')
        myTable[variable-1].classList.remove('active')
    }
    else if(e.key === 'd' && variable2<=tableRow2.lastElementChild.cellIndex-1) {
        variable2++
        const myTable = tableRow2.children
        myTable[variable2].classList.add('active')
        myTable[variable2-1].classList.remove('active')
    }
    if(tableRow1.lastElementChild.classList.value.includes('active')) {
        console.log('player1 wins')
       setTimeout(()=>{restart()},500)
       winner.innerText = 'player 1 wins'
       winner.classList.toggle('hidden')
    }
    else if(tableRow2.lastElementChild.classList.value.includes('active')) {
        console.log('player 2 wins')
        setTimeout(()=>{restart()},500)
        winner.innerText = 'player 2 wins'
        winner.classList.toggle('hidden')
    }
    
});

function restart () {
    variable = 0;
    variable2 = 0;
    tableRow1.firstElementChild.classList.add('active')
    tableRow2.firstElementChild.classList.add('active')
    tableRow1.lastElementChild.classList.remove('active')
    tableRow2.lastElementChild.classList.remove('active')
    winner.classList.toggle('hidden')
}