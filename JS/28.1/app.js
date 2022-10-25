const getButton = document.querySelector('button')
const jokeTitle = document.querySelector('.title > h2')
const joke = document.querySelector('.jokeContent')
getButton.addEventListener('click', fetchData)


function fetchData () {
    fetch(('https://api.jokes.one/jod')
    ).then((res)=>{return res.json()})   
    .then(({contents})=>{
        jokeTitle.innerText = `${contents.jokes[0].joke.title}`
        joke.innerText = `${contents.jokes[0].joke.text}`
        console.log(contents.jokes[0].joke)
    }).catch((res)=>{
        console.log(res.json().status);
    })
}

