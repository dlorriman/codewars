//https://www.codewars.com/kata/57238ceaef9008adc7000603

//solution #1
function colorOf(r, g, b) {
    let R = r.toString(16)
    let G = g.toString(16)
    let B = b.toString(16)

    if (r < 16) R = '0' + R
    if (g < 16) G = '0' + G
    if (b < 16) B = '0' + B

    return '#' + R + G + B
}

//solution #2
function colorOf(r,g,b) {
    return "#" + toHex(r)+ toHex(g)+ toHex(b)
  }

function toHex(n) {
    let result = n.toString(16)
    return result.length == 1 ? "0" + result : result
}

//solution #3
function colorOf(r,g,b) {
    r.toString(16).length < 2 ? r = '0' + r.toString(16) : r = r.toString(16)
    g.toString(16).length < 2 ? g = '0' + g.toString(16) : g = g.toString(16)
    b.toString(16).length < 2 ? b = '0' + b.toString(16) : b = b.toString(16)

    return '#' + r + g + b
}
