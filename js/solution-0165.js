/* https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

Given 2 characters a & b...

return -1 if either is not a letter
return 1 if both are the same case
return 0 if both are not the same case

Examples:
'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1

*/

function sameCase(a, b) {
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
        return -1
    }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
        return 1
    }else{
       return 0
    }
}