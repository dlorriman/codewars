// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

function multiTable(number) {
    let string = ''
    for (let i = 1; i <= 10; i++) {
        string += `i * ${number} = ${number * i}`
    }
    return string
}