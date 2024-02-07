function password(obj) {

    const objLength = Object.keys(obj).length;

    // else
    if(objLength !== 3 || obj.birthYear.toString().length !== 4){
        return 'invalid';
    }

    let name = obj.name;
    let birthYear = obj.birthYear;
    let siteName = obj.siteName;
    
    let sli1 = siteName.slice(0,1).toUpperCase();
    
    let sli2 = siteName.slice(1);

    let fullSiteName = sli1 + sli2;

    let str = fullSiteName + '#' + name + '@' + birthYear;

    return str;
}
let pass = password({ name: 'kolimuddin' , birthYear: 3586 , siteName: 'google' });
console.log(pass);