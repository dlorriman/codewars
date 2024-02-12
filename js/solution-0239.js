/* https://www.codewars.com/kata/57b58827d2a31c57720012e8

Given 2 numbers (litres, pricePerLitre)...

Return the total cost, less discount, rounded to 2 decimal places.

if (litres > 10) return (pricePerLitre - 25) * litres
if (litres > 8) return (pricePerLitre - 20) * litres
if (litres > 6) return (pricePerLitre - 15) * litres
if (litres > 4) return (pricePerLitre - 10) * litres
if (litres > 2) return (pricePerLitre - 5) * litres

*/

function fuelPrice(litres, pricePerLitre) {
	let discount = Math.min(Math.floor(litres / 2) * 5, 25) / 100
	let totalCost = litres * (pricePerLitre - discount)
	return parseFloat(totalCost.toFixed(2))
}
