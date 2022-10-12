
const off = document.querySelector('.off')
let counter = 0;
const onimage = 'on.png'
const offimage = 'off.png'
off.addEventListener('click', () =>{
    counter++ 
    if(counter%2 === 0){
        off.src =`${offimage}`
    } else if (counter%2 === 1) {
        off.src = `${onimage}`
    }
})