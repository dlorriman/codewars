/* https://www.codewars.com/kata/55cbd4ba903825f7970000f5

Given 3 positive integers between 1 - 100...

Return a string value based on the following conditions,

If average is,

>=90 return 'A'
>=80 return 'B'
>=70 return 'C'
>=60 return 'D'
else return 'F'

Examples:
getGrade(95,90,93), 'A'
getGrade(70,70,100), 'B'
getGrade(70,70,70), 'C'
getGrade(65,70,59), 'D'
getGrade(44,55,52), 'F'

Pseudocode:
Write a function getGrade, with 3 parameters s1, s2, s3.
Calculate the average by adding the inputs together and dividing by 3.
Return the correct string based on the conditions
*/

function getGrade(s1, s2, s3) {
    let averageScore = (s1 + s2 + s3) / 3
    if (averageScore >=90) return 'A'
    if (averageScore >=80) return 'B'
    if (averageScore >=70) return 'C'
    if (averageScore >=60) return 'D'
    else return 'F'
}