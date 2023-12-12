/* https://www.codewars.com/kata/57a77726bb9944d000000b06

Given a quantity and a price (q, p)...

Return the total cost...

if q < 3 ? q * p
else (q * 2/3) * p

*/

function mango(q, p) {
    return q < 3 ? q * p : Math.ceil(q * 2/3) * p
}

function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3))
}