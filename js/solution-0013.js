// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f

// solution using conditional statement
function whatNumberIsIt(n){
    if (n === Number.MAX_VALUE) return "Input number is Number.MAX_VALUE"
    else if (n === Number.MIN_VALUE) return "Input number is Number.MIN_VALUE"
    else if (isNaN(n)) return "Input number is Number.NaN"
    else if (n === Number.NEGATIVE_INFINITY) return "Input number is Number.NEGATIVE_INFINITY"
    else if (n === Number.POSITIVE_INFINITY) return "Input number is Number.POSITIVE_INFINITY"
    else return `Input number is ${n}`
}


// solution using switch statement
function whatNumberIsIt(n){
    switch(n){
        case Number.MAX_VALUE: return ("Input number is Number.MAX_VALUE"); 
        case Number.MIN_VALUE: return  ("Input number is Number.MIN_VALUE");
        case Number.POSITIVE_INFINITY: return ("Input number is Number.POSITIVE_INFINITY");
        case Number.NEGATIVE_INFINITY: return ("Input number is Number.NEGATIVE_INFINITY");
        case Number(n) : return "Input number is " + n;
        default: return "Input number is Number.NaN";
    }
}