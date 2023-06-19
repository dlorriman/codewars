// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

// function declaration with if else statement

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100
  } else if (n < 10) {
    return n * 95
  } else {
    return n * 90
  }
}

// condensed version of above

function saleHotdogs(n) {
  if (n < 5) return n * 100
  else if (n < 10) return n * 95
  else return n * 90
}

// function declaration with ternary operator

function saleHotdogs(n){
  return n*(n < 5 ? 100 : n < 10 ? 95 : 90)
}

// arrow function with ternary operator

const saleHotdogs = n => n*(n < 5 ? 100 : n < 10 ? 95 : 90)