// https://www.codewars.com/kata/574b3b1599d8f897470018f6/

function getRealFloor(n) {
    return (n > 12) ? n-2 : (n > 0) ? n-1 : n
}

function getRealFloor(n) {
    if (n > 12) return n-2 
    else if (n > 0) return n-1
    else return n
}