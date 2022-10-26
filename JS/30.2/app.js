
const searchBtn = document.getElementById('search-btn')
const gridContainer =document.getElementById('gridContainer')
const userInput =document.getElementById('user')


async function getData() {
try   {const data = (await fetch(`http://www.omdbapi.com/?t=${userInput.value}&apikey=33b7bd0`)).json().catch(e=>console.log(e))
 return data
}
    catch (e){console.log('oh no');}
}

function getUserInput() {
     const input = userInput.value.toLowerCase()
     console.log(input);
     return input
}



searchBtn.addEventListener('click', (e)=>{
e.preventDefault()
insertMovie()
gridContainer.hasChildNodes()? gridContainer.replaceChildren(''):null;
})

function extractRatings(arr) {
    // arr =val.Ratings 
    let Rating=''
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const Source = element.Source
        const movieRating = element.Value
        Rating += `${Source} : ${movieRating}. `
    }
    return Rating
}

async function insertMovie(){
    try {const val = await getData()
        let movie = getUserInput()
            if (val.Title.toLowerCase()=== movie) { 
                let poster = document.createElement('div');
                poster.classList.add('poster')
                poster.style.background = `url(${val.Poster})center center/cover no-repeat`
                poster.innerText = 
                `Title : ${val.Title}
                Director: ${val.Director}
                Genre : ${val.Genre}
                Plot : ${val.Plot}
                Actors : ${val.Actors}
                Year : ${val.Year}
                Ratings : ${extractRatings(val.Ratings)}`
                gridContainer.append(poster)
              
            
        }
    // joke.innerText = `${val.contents.jokes[0].joke.text}`
}
    catch (e) {console.log(e)}
}

