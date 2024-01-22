/* https://www.codewars.com/kata/5862f663b4e9d6f12b00003b

Given 3 inputs...

blueStart = the number of blue marbles you put in the bag to start
redStart = the number of red marbles you put in the bag to start
bluePulled = the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
redPulled = the number of red marbles pulled out so far (always lower than the starting number of red marbles)

Write a function guessBlue that...

Returns the probability of drawing a blue marble, expressed as a float.

Example:
guessBlue(5, 5, 2, 3), 0.6
guessBlue(5, 7, 4, 3), 0.2
guessBlue(12, 18, 4, 6), 0.4

Pseudocode:
(blueStart - bluePulled) / (blueStart - bluePulled + redStart - redPulled)

*/

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    return (blueStart - bluePulled) / (blueStart - bluePulled + redStart - redPulled)
}