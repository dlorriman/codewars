/* https://www.codewars.com/kata/5300901726d12b80e8000498

Given a number (n) ...

Write a function, fizzbuzz, that returns an array of numbers from 1 to n.
Replace values if the following conditions are met.

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Example:

3 -> [1, 2, "Fizz"]
5 -> [1, 2, 3, 4, "Buzz"]
15 -> [1, 2, 3, 4, 5, ... , "FizzBuzz"] ->
*/

function fizzbuzz(n) {
    let arr = []
    for(let i = 1; i <= n; i++) {
        if(i%3 === 0 && i%5 === 0) {
            arr.push('FizzBuzz')
        } else if (i%5 === 0) {
            arr.push('Buzz')
        } else if (i%3 === 0) {
            arr.push('Fizz')
        } else {
            arr.push(i)
        }
    }
    return arr
}