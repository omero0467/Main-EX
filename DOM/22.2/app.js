const snoop = document.querySelector('#snoop')
const checker = document.querySelector('#checker')

checker.addEventListener('input' ,()=>{
    if (checker.checked) {
        snoop.classList.toggle('hidden')
    }else {snoop.classList.toggle('hidden')}
})