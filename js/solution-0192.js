/* https://www.codewars.com/kata/5810085c533d69f4980001cf

Given 2 numbers and a sign as input, either +, -, *, /.
Return the result of the relavant operation
If any of the inputs are invalid return 'unknown value'.

Examples:
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"

Pseudocode:
Check to see if numbers are valid, if not return 'unknown value'.

*/

function calculator(n1, n2, sign) {
    // check if n1 and n2 are numbers
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return 'unknown value'
    }

    // perform the operation based on the sign
    switch (sign) {
        case '+': return n1 + n2
        case '-': return n1 - n2
        case '*': return n1 * n2
        case '/': return n1 / n2
        default: return 'unknown value'
    }
}