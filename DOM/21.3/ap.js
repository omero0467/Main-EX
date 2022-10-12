const input = document.querySelector('textarea')
const message = document.querySelector('p')
const btn = document.querySelector('button')

btn.addEventListener('click', (e) =>{
if (Number(input.value) < 100) {
    message.innerText = 'Its false'
}}
)