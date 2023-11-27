/* https://www.codewars.com/kata/57a429e253ba3381850000fb

Input: Two numbers representing weight and height
Output: A string based on the following conditions

bmi = weight / height2

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"

Examples:
bmi(80, 1.80), "Normal"

Pseudocode:
Write a function called bmi with 2 parameters weight and height
Calculate the bmi by dividing weight by height2
Compare the bmi by each condition to return the correct string

*/

function bmi(weight, height) {
    let bmi = weight / height**2
    if(bmi <= 18.5) return "Underweight"
    if(bmi <= 25.0) return "Normal"
    if(bmi <= 30.0) return "Overweight"
    if(bmi > 30) return "Obese"
}
