/* https://www.codewars.com/kata/5748a883eb737cab000022a6

Pseudocode:
Given a variable that points to object a or b.
Check if any value in the object is 'nay'
If true, return 'Shiver me timbers!'
else return 'Fire!'

*/

const cannonsReady = gunners => {
    for (let response in gunners) {
        if (gunners[response] === 'nay') {
            return 'Shiver me timbers!'
        }
    }
    return 'Fire!'
}

const cannonsReady = gunners => {
    return Object.values(gunners).some(v => v === 'nay') ? 'Shiver me timbers!' : 'Fire!'
}