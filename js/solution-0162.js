// https://www.codewars.com/kata/5bb0c58f484fcd170700063d

function pillars(numPill, dist, width) {
    return numPill <= 1 ? 0 : (numPill - 1) * dist * 100 + (numPill - 2) * width
}