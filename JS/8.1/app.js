const lordOfTheRings = {
    'number of pages' : 1178,
    author : 'J.R.R Tolkin',
    'publishing year' : 1954,
    name : 'Lord Of The Rings',

    description () {
        const {
            author,
            name
        } = this;
        return console.log (`The Book ${name} was written by ${author} in ${this["publishing year"]} contains ${this["number of pages"]}`)
        }
    } 


    lordOfTheRings.description();