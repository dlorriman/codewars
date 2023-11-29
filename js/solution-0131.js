/* https://www.codewars.com/kata/5672a98bdbdd995fad00000f

Given 2 random strings as arguments, either 'rock', 'paper', or 'scissors'.
Return a string of which player wins or draw based on the following conditions,

rock beats scissors
paper beats rock
scissors beats paper
if p1 === p2 then draw

Examples:
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

Pseudocode:
Write a function called rps with 2 parameters, p1 and p2.
Return the correct string based on the conditions.


const rps = (p1, p2) => {
    if(p1 === p2) return 'Draw!'

    if(p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!'
    if(p1 === 'paper' && p2 === 'rock') return 'Player 1 won!'
    if(p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!'
    
    else return 'Player 2 won!'
}
*/

const rps = (p1, p2) => {
    const winningMoves = {rock: 'scissors', paper: 'rock', scissors: 'paper'}

    if(p1 === p2) return 'Draw!'

    if(winningMoves[p1] === p2) return 'Player 1 won!'
    else return 'Player 2 won!'
}