/* https://www.codewars.com/kata/53369039d7ab3ac506000467

Given a boolean, true / false

Will it always be a boolean? Do I need to account for any other data type?
Perhaps true passed as a string?
Could there ever be an invalid input? Do I need to account for unexpected edge cases?

Return a 'Yes' string for true or a 'No' string for false.

Examples:
true -> 'Yes'
false -> 'No'

Pseudocode:
Write a function that takes a boolean as an argument.
Use a conditional to check the bool and return the correct string.
*/

function boolToWord(bool){
    return bool ? 'Yes' : 'No'
}

const boolToWord = bool => bool ? 'Yes' : 'No'