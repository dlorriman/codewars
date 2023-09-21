/* https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

Given a number, always greater than zero.
Return the corresponding phrase as a string.

1 = "I love you"
2 = "a little"
3 = "a lot"
4 = "passionately"
5 = "madly"
6 = "not at all"

If there are more than 6 petals, start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

Pseudocode:
Write a function that takes in a number.
The number modulo 6
Compare the result and return the corresponding phrase
*/

// switch statement
function howMuchILoveYou(nbPetals) {
    switch (nbPetals % 6) {
      case 1:
        return 'I love you'
      case 2:
        return 'a little'
      case 3:
        return 'a lot'
      case 4:
        return 'passionately'
      case 5:
        return 'madly'
      default:
        return 'not at all'
    }
  }

// if/else statement
function howMuchILoveYou(nbPetals) {
    if (nbPetals % 6 === 1) {
      return 'I love you'
    } else if (nbPetals % 6 === 2) {
      return 'a little'
    } else if (nbPetals % 6 === 3) {
      return 'a lot'
    } else if (nbPetals % 6 === 4) {
      return 'passionately'
    } else if (nbPetals % 6 === 5) {
      return 'madly'
    } else {
      return 'not at all'
    }
  }

// object
function howMuchILoveYou(nbPetals) {
    const responses = {
      1: 'I love you',
      2: 'a little',
      3: 'a lot',
      4: 'passionately',
      5: 'madly',
      0: 'not at all'
    }
  
    return responses[nbPetals % 6]
  }

// array
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all'
]

function howMuchILoveYou(nbPetals) {
    return phrases[(nbPetals -1) % phrases.length]
}