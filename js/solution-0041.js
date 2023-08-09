// https://www.codewars.com/kata/57fae964d80daa229d000126

function remove (string) {
    if(string.endsWith('!')) {
        return string.slice(0, -1)
    } else {
        return string
    }
}

const remove = s => s.endsWith('!') ? s.slice(0, -1) : s