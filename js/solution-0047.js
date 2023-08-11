// https://www.codewars.com/kata/5547929140907378f9000039

function shortcut(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return string.split('').filter(c => !vowels.includes(c)).join('')
}

function shortcut (string) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const result = []

    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        if (!vowels.includes(char)) {
            result.push(char)
        }
    }

    return result.join('')
}

function shortcut(string) {
    const vowels = 'aeiou'
    const withoutVowels = string.split('').reduce((acc, c) => {
        return acc + (vowels.includes(c) ? '' : char)
    }, '')
    return withoutVowels
}

function shortcut(string) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    return string.split('').filter(char => !vowels.has(char)).join('')
}