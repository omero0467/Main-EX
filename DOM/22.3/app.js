const characters ='abcdefghijklmnopqrstuvwxyz';
const randomChar = document.querySelector('#randomChar');
const correctGuess = document.querySelector('#correctGuess');
const usermessage = document.querySelector('#user-message');
const keys = document.querySelector('#keys');
const resetbtn = document.querySelector('#playagain');
let guessedLetters='';
let alreadyguessedLetters='';

let result = '';
function randomLetter () {
    for (let i = 0; i < characters.length; i++) {
        result = characters.charAt(Math.floor(Math.random() * characters.length));
    }
    console.log(result);
        return result;
}
const regex = /[a-z]/

document.addEventListener('keypress',input)
function input (e) {
    
    if(regex.test(e.key)){
        if(result === e.key) {
            correctGuess.classList.toggle('hidden');
            randomChar.innerText = result
            usermessage.innerText ='Correct!'
            usermessage.style.color = 'green'
            document.removeEventListener('keypress',input)
        }
        else if(result!==e.key && !guessedLetters.includes(e.key)|| guessedLetters === ''){
            usermessage.innerText ='Nope Wrong Letter!'
            usermessage.style.color = 'red'
            guessedLetters += e.key + ', ';
        }
    } else {usermessage.innerText ='Invalid Guess!!!'}
    
    alreadyguessedLetters.includes(e.key)? usermessage.innerText ='Already Guessed This One!': null;
    alreadyguessedLetters += e.key + ', '
    keys.innerText = guessedLetters
}

resetbtn.addEventListener('click', e=>{
    randomLetter();
    guessedLetters='';
    alreadyguessedLetters='';
    keys.innerText = ''
    randomChar.innerText='?'
    correctGuess.classList.toggle('hidden');
    usermessage.innerText ='Guess a Key'
    usermessage.style.color='black'
    document.addEventListener('keypress', input)
    
})
randomLetter();