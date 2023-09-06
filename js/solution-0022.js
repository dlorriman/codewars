// https://www.codewars.com/kata/57f222ce69e09c3630000212


// option 1: switch statement
function well(x){
    switch (x.filter(item => item === 'good').length) {
        case 0:
            return 'Fail!'
        case 1:
        case 2:
            return 'Publish!'
        default:
            return 'I smell a series!'
    }
}

// option 2: turnary operator

const well = x => {
    const goodCount = x.filter(x => x === 'good').length
    return  goodCount < 1 ? 'Fail!' :
            goodCount < 3 ? 'Publish!' : 'I smell a series!'
}