// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

function replace(s){
    // Define an array of vowels (both lower and uppercase)
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    // Convert the sentence into an array of characters
    const characters = s.split('')
    // Loop through the characters and replace vowels with exclamation marks
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(characters[i])) {
            characters[i] = '!'
        }
    }
    // Join the characters back into a string and return it
    return characters.join('')
}

// Simplified
function replace(s){
    return s.split('').map(c => 'aeiouAEIOU'.includes(c) ? '!' : c).join('')
}

// One-liner

const replace = s => (s.split('').map(c => 'aeiou'.includes(c.toLowerCase()) ? '!' : c)).join('')