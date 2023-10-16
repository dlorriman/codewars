/* https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

Given an array of positive integers...

Write a function rowWeights, that returns a new array of 2 integers.
The first one is the sum of the odd index elements and the second the sum of the even index elements.

Array size is at least 1.
All numbers will be positive.

Examples:
rowWeights([13, 27, 49])  ==>  return [62, 27]
rowWeights([50, 60, 70, 80])  ==>  return [120, 140]
rowWeights([80])  ==>  return [80, 0]

*/

function rowWeights(arr) {
    let oddSum = 0
    let evenSum = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenSum += arr[i]
        } else {
            oddSum += arr[i]
        }
    }
    return [evenSum, oddSum]
}

function rowWeights(arr) {
    return arr.reduce((acc, c, i) => {
        const targetSum = i%2 === 0 ? acc[0] : acc[1]
        acc[i%2] = targetSum + c
        return acc
    }, [0, 0])
}

