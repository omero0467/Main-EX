const color1 = (color) => {
    let a = color.toLowerCase()
    switch (a){
        case 'orange':
        case 'pink' :
        case 'yellow':
        return console.log('light Color');
        break
        case 'blue': case 'purple': case 'brown' :
            return console.log('dark color')
            break;
        default : return console.log("unknown color")
    }
    
}


color1 ('Brown')