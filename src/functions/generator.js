function addArr (arr, len) {
    let res = []

    for (var i = 0; i < len; i++) {
        res.push(arr[i]);
    }

    return res;
}
function shuffle(arr) {
    let j;

    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return(arr);
}

function generator(valueN, valueS, valueV, myHesh, generateString) {
    if (valueN > myHesh.heshN.length || valueS > myHesh.heshS.length || valueV > myHesh.heshV.length) {
        alert('Количество выходит за пределы диапазона');
        return;
    }
    
    let 
        result = myHesh.heshM, 
        temp = [];
    
    temp = addArr(myHesh.heshV, myHesh.heshV.length);
    temp = shuffle(temp);
    temp = addArr(temp, valueV);
    result = result.concat(temp);
    temp = [];
    
    temp = addArr(myHesh.heshS, myHesh.heshS.length);
    temp = shuffle(temp);
    temp = addArr(temp, valueS);
    result = result.concat(temp);
    temp = [];

    temp = addArr(myHesh.heshN, myHesh.heshN.length);
    temp = shuffle(temp);
    temp = addArr(temp, valueN);
    result = result.concat(temp);
    temp = [];
    
    generateString('#' + result.join(' #'));
    
    return;
}

export default generator;