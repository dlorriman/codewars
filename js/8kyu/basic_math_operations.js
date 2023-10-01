/* https://www.codewars.com/kata/57356c55867b9b7a60000bd7

Input: 3 args (operator, value1, value2)
Output: Return a number after applying the operation
Examples:
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
Pseudocode:
Write a function that takes in 3 args (operator, value1, value2)
Perform the necessary operation
Return the result
*/

function basicOp(o, a, b) {
    switch (o) {
        case '+': return a + b
        case '-': return a - b
        case '*': return a * b
        case '/': return a / b
        default: return 0
    }
}

function basicOp(o, a, b) {
    return o === '+' ? a + b :
           o === '-' ? a - b :
           o === '*' ? a * b :
           o === '/' ? (b !== 0 ? a / b : 'Cannot divide by zero') :
           'Invalid operator';
}