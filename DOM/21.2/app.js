const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
const paragraph = document.querySelector('p')
const minFont = 6
let Font = 16
const maxFont = 100
const increaseFunc = (event) => {
    if(Font!==maxFont){
    paragraph.setAttribute('style', `font-size:${Font+=5}px`)
    }
}
const decreaseFunc = (event) => {
    if(Font!==minFont){
        paragraph.setAttribute('style', `font-size:${Font-=5}px`)
    }
}
increase.addEventListener('click', increaseFunc)
decrease.addEventListener('click', decreaseFunc)