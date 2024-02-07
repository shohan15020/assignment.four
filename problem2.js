function checkName(name) {
    if(typeof name !== 'string'){
        return 'invalid';
    }

    const nam = name[name.length - 1];
    const nam2 = nam.toLowerCase();
    
    if(nam2 === 'a' || nam2 === 'y' || nam2 === 'i' || nam2 === 'e' || nam2 === 'o' || nam2 === 'u' || nam2 === 'w'){
        return 'Good Name';
    }
    else{
        return 'Bad Name';
    }
    
}

let check = checkName(['Rashed']);
console.log(check);