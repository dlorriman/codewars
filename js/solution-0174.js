/* https://www.codewars.com/kata/5977618080ef220766000022

Given a positive integer...

Return a string that includes the input number * 6.75 with 2 decimal places in the format,

`${cny} Chinese Yuan`

Examples:
15  -> '101.25 Chinese Yuan'
465 -> '3138.75 Chinese Yuan'

Pseudocode:
Convert usd to cny
return cny with 2 decimals inside a string in the format provided

*/

function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}