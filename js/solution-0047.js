// https://www.codewars.com/kata/5547929140907378f9000039

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