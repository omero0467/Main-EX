const input = document.querySelector('input')
const btn = document.querySelector('button')
const error = document.querySelector('.error')
const images = document.querySelector('.images')
btn.addEventListener('click', () => {
    images.innerHTML = ''
    if (Number(input.value)) {
        for (let i = 0; i < (Number(input.value)); i++) {
            let smiley = createEl()
            document.querySelector('.images').appendChild(smiley)
            error.style = 'display:none;'
        }
    } else {
        error.style = "display:block;"
    }
})

function createEl() {
    const myimg = document.createElement('img');
    myimg.setAttribute('src', 'smiley.webp')
    return myimg
}
