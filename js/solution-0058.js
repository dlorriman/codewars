// https://www.codewars.com/kata/59fca81a5712f9fa4700159a

function toBinary(n){
    let binary = n.toString(2)
    return +(binary)
}

function toBinary(n){
    return +n.toString(2)
}

let toBinary = n => +n.toString(2)

toBinary = n => parseInt(n.toString(2))