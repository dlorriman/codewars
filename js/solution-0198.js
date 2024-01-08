/* https://www.codewars.com/kata/55a996e0e8520afab9000055

*/

function cookie(x) {
    const str = 'Who ate the last cookie? It was '
    if(typeof(x) === 'string') return str + 'Zach!'
    if(typeof(x) === 'number') return str + 'Monica!'
    else return str + 'the dog!'
}