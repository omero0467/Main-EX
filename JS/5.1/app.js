const countryToLiveIn = (language, island, pop, country) => {
if ( (language ? 'English' : null) &&
     (pop<50 ? 'population count' + ' ' + pop   : null) &&
     (island ? true : false) &&
(country ? `${country}`: null)) {
    return (console.log (`You should live in ${country}`))
    } else { return console.log (`${country} does not meet your criteria`)}
}

countryToLiveIn('English', true, 50, 'china');
