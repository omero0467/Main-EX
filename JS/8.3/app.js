const Book1 = {
    author : 'J.R.R Tolkin',
    'publishing year' : 1954,
    name : 'Lord Of The Rings',
}
const Book2 = {
    author : 'J.K Rollin',
    'publishing year' : 1997,
    name : 'Harry Potter',
}

const bookUtils = {
    getFirstPublished (a, b) {
      return  a["publishing year"] > b["publishing year"] ? console.log(`${a.name} ${Book1["publishing year"]}`) : console.log(`${b.name} ${b["publishing year"]}`)
    },
    setNewEdition (book, year) {
         book.latestEdition = year
    },
    setLanguage (book, lang) {
         book.originLanguage = lang
    },
    setTranslation (book, lang, translator) {  
        book.translation = {
            translator, lang
        }
    },
    setPublisher (book, name, location) {  
        book.publisher = {
            location, name
        }
    },
    isSamePublisher (b1, b2) {
        return  b1.publisher.name === b2.publisher.name ? true : false;
}
}



// bookUtils.getFirstPublished(Book1, Book2);
// bookUtils.setNewEdition(Book1, 2007);
// bookUtils.setLanguage(Book1, 'English');
// bookUtils.setTranslation(Book2, 'hebrew', 'ben')
bookUtils.setPublisher(Book1, 'Olympia', 'UK');
bookUtils.setPublisher(Book2, 'Nether', 'UK');
console.log(bookUtils.isSamePublisher(Book1,Book2))
// console.log(Book1)