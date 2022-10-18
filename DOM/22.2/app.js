const snoop = document.querySelector('#snoop')
const checker = document.querySelector('#checker')

checker.addEventListener('input' ,()=>{
    checker.checked? snoop.classList.toggle('hidden'): snoop.classList.toggle('hidden')
})