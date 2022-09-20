const language = (lang) => {
     switch (lang) {
        case 'Mandarin' :
            return console.log ('MOST native speakers!')
            break;
        case 'English' :
            return console.log ('2nd Place')
            break;
        case 'Spanish' :
            return console.log ('3rd Place')
            break;
        case 'Hindi' :
            console.log ('Number 4')
            break;
        case 'Arabic' :
            return console.log ('5th Most spoken Language!')
            break;
            
            default: 'Not in the top 5'

    }
}


language("English")

