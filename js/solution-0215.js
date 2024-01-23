/* https://www.codewars.com/kata/582dafb611d576b745000b74

Given a string...
If the string is 'George Saint Pierre' return "I am not impressed by your performance."
If the string is 'Conor McGregor' return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
Treat the input as case-insensative!

*/

var quote = function(fighter) {
    if (fighter.toLowerCase() === 'george saint pierre') return "I am not impressed by your performance."
    else return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
}

function quote(fighter) {
    return fighter.toLowerCase() === 'conor mcgregor' ? "I'd like to take this chance to apologize.. To absolutely NOBODY!" : "I am not impressed by your performance."
}

const quote = fighter => fighter.toLowerCase() === 'conor mcgregor' ? "I'd like to take this chance to apologize.. To absolutely NOBODY!" : "I am not impressed by your performance."