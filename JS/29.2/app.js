const getButton = document.querySelector('button')
const jokeTitle = document.querySelector('.title > h2')
const joke = document.querySelector('.jokeContent')
getButton.addEventListener('click', insertJokes
)


async function fetchData () {
    const res1 = await fetch(('https://api.jokes.one/jod')
    )
    if(!res1.ok){ throw new Error ('fetch failed') }
    return res1.json()
}

async function insertJokes (){
    try {const val = await fetchData()
    jokeTitle.innerText = `${val.contents.jokes[0].joke.title}`
    joke.innerText = `${val.contents.jokes[0].joke.text}`}
    catch (e) {console.log(e)}
}

