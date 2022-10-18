const submitbtn = document.querySelector('#submit1')
const change = document.querySelector('#change')
const confirm1 = document.querySelector('#confirm')
const confirmed = document.querySelector('.text-box')
const pageOverlay = document.querySelector('.page-overlay')
const myform = document.querySelector('#myForm')

submitbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    pageOverlay.classList.toggle('hidden')
})

change.addEventListener('click', e => {
    pageOverlay.classList.toggle('hidden')
    confirmed.querySelector('h3').innerText = "Are you sure you want to submit?"
})
confirm1.addEventListener('click', e => {
    confirmed.querySelector('h3').innerText = "Form Submited!"
    setTimeout(function(){
        myform.submit()
        pageOverlay.classList.toggle('hidden')
    }, 500);
});