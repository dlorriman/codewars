/* https://www.codewars.com/kata/55eea63119278d571d00006a

Given an array of unsorted numbers.
Return the first unused number.

Examples: 
nextId([1,2,0,2,3,5]), 4
nextId([0,1,2,3,5]), 4
nextId([0,1,2,3,4,5,6,7,8,9,10]), 11

*/

function nextId(ids) {
    const uniqueIds = [...new Set(ids)].sort((a, b) => a - b)

    for (let i = 0; i < uniqueIds.length; i++) {
        if (uniqueIds[i] !== i) {
            return i
        }
    }

    return uniqueIds.length
}

function nextId(ids) {
    let i = 0
    while (ids.includes(i)) {
        i++
    }
    return i
}

function nextId(ids) {
    let i = 0
    while (ids.includes(i)) i++
    return i
}

function nextId(ids){
    for (i = 0; i < ids.length; i++) { 
      if (ids.indexOf(i) == -1){
        return i
      }
    }
    return ids.length
}