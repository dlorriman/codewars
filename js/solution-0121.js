/* https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

Given a two-dimensional array of numbers of at least length > 2

Return a csv representation like the example.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'

*/

function toCsvText(array) {
    return array.map(row => row.join(',')).join('\n')
}

const toCsvText = array => array.join('\n')