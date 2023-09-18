// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Problem / challenge
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// Parameters: Given a string of only lowercase letters, may contain spaces.
// Returns: Return a number representing a count of the vowels in the string. a, e, i, o, u, but not y are considered vowels.
// Examples:"abracadabra" -> 5
// Pseudocode: iterate over the string counting the number of vowels and return a number representing the total number of vowels.

// take in a string
// start count at zero
// loop through each character of the string adding vowels to the count

function getCount(str) {
    let vowelCount = 0



    return vowelCount
}

// Solution 1: Using a for loop

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++
        }
    }
    return count
}

// Solution using forEach and split

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    str.split('').forEach(char => {
        if (vowels.includes(char)) {
            count++
        }
    })

    return count
}

// Using reduce and split

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    
}