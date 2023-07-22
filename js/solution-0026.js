// https://www.codewars.com/kata/55eca815d0d20962e1000106

function generateRange(min, max, step){
    let array = []
    for(let i = min; i <= max; i += step) {
        array.push(i)
    }
    return array
}