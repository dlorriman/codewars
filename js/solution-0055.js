// https://www.codewars.com/kata/596c6eb85b0f515834000049

let replaceDots = function(str) {
    return str.replace(/\./g, '-');
  }

let replaceDots = s => s.split('.').join('-')