setInterval(setClock,1000)

const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector('.second')

function setClock () {
    const currentDate  = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const MinutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const HourssRatio = (MinutesRatio + currentDate.getHours() )/ 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, MinutesRatio)
    setRotation(hourHand, HourssRatio)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()