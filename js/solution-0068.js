/* https://www.codewars.com/kata/5a3dd29055519e23ec000074

Given two arrays of the same length, array1 and array2...

Write a function, checkExam, that compares the two arrays, the first array is the key.

Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string.

If the score < 0, return 0.

Examples:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

Write pseudocode first to explain your process.

*/

function checkExam(array1, array2) {
    let score = 0
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === array1[i]) {
            score += 4
        }
        else if (array2[i] !== '' && array2[i] !== array1[i]) {
            score -= 1
        }
    }
    return Math.max(score, 0)
}

function checkExam(array1, array2) {
    let score = 0
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            score += 4
        } else if (array2[i] === '') {
            score += 0
        } else score -= 1
    }
    if (score < 0) score = 0
    return score
}