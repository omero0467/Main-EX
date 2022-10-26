const searchBtn = document.getElementById('search-btn')
const gridContainer =document.getElementById('gridContainer')
const userInput =document.getElementById('user')


function getUserInput(e) {
    return console.log(e.target.value.toLowerCase())
}
userInput.addEventListener('input', getUserInput)

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if (userInput.value) {
        console.log(userInput.value)
        userInput.value =''
    } console.log(err)
})


async function getUsersAPI (userName){
    try{ const user = (await fetch(`https://api.github.com/users/${userName}`)).json()
 return user
}
   catch (err){console.log('oh no')

}
}
// getUsersAPI('omereo0467')
// getUser()
console.log(getUsersAPI('omero0467'));