function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return 'you have provided Invalid Array';
    }

    let count = [];
    for(let item of array){
        if(typeof item === 'number' && !isNaN(item)){
            count.push(item);
        }
    }
    return count;
}
let items = deleteInvalids(['1', {num:2} , NaN ]);
console.log(items);