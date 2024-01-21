// https://www.codewars.com/kata/577a6e90d48e51c55e000217

function hotpo(n) {
    let count = 0;

    while (n !== 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n = 3 * n + 1;
        }
        count++;
    }

    return count;
}