// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

function multiTable(number) {
    let string = ''
    for (let i = 1; i <= 10; i++) {
        string += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`
    }
    return string
}

const multiTable = (number) => {
    let table = ''
    for (let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`
    }
    return table
}

function multiTable(number) {
    let array = []
    for let (i = 1; i <=10; i++) {
        array.push(`${i} * ${number} = ${number * i}`)
    }
    return array.join('\n')
}