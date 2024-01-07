/* https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e

Given a string...
Return the string with everything from the comma removed.

"Friday May 2, 7pm" --> "Friday May 2"

Pseudocode:
Split the string at the comma
Return only the first element

*/

function shortenToDate(longDate) {
    const commaIndex = longDate.indexOf(',')
    return longDate.slice(0, commaIndex)
}

function shortenToDate(longDate) {
    return longDate.slice(0, longDate.indexOf(','))
}

function shortenToDate(longDate) {
    return longDate.split(',')[0]
}

shortenToDate = longDate => longDate.split(',')[0]

function shortenToDate(longDate) {
    const [date, time] = longDate.split(',')
    return date
}