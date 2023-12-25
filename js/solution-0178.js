/* https://www.codewars.com/kata/557b5e0bddf29d861400005d

Given a positive number (mpg)...

Return kpl rounded 2 two decimals.
kpl = mpg * 4.54609188 / 1.609344

*/

function converter(mpg) {
    return +(mpg * 1.609344 / 4.54609188).toFixed(2)
}