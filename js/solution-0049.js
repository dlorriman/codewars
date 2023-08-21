// https://www.codewars.com/kata/56f695399400f5d9ef000af5

function correctTail(body, tail) {
    let sub = body[body.length-1]
    if (sub === tail) return true
  }

const correctTail = (body, tail) => body.endsWith(tail)