/* https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e */

function stairsIn20(s) {
    return 20 * s.reduce((acc, curr) => acc + curr.reduce((acc, curr) => acc + curr, 0), 0)
}

stairsIn20 = s => 20 * s.reduce((a, c) => a + c.reduce((a, c) => a + c, 0), 0)