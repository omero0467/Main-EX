const pass = (password) => {
   let pass 
    (password.length > 6) && (password.match(/[A-Z]/)) ? pass = 'Very Strong' : password.length > 6 ? pass = 'Strong' : weak;
    return console.log(pass);
}

pass('AGHSNKANSD')