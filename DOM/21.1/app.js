const input = document.querySelector('input')
const inputHandle = (ev)=> {
 if(Number(ev.target.value) < 18 && Number(ev.target.value)) {
    document.querySelector('.under').style = 'opacity: 1;'
    document.querySelector('.over').style = 'opacity: 0;'
 } else if (Number(ev.target.value) > 18 && Number(ev.target.value)){
    document.querySelector('.under').style = 'opacity: 0;'
    document.querySelector('.over').style = 'opacity: 1;'
 } else if (!ev.target.value) {

    document.querySelector('.under').style = 'opacity: 0;'
    document.querySelector('.over').style = 'opacity: 0;'
 }
}

input.addEventListener('input', inputHandle)