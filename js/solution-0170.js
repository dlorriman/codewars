/* https://www.codewars.com/kata/568dc014440f03b13900001d

Given a string as input...
Return the corresponding string as per the table provided.

Example:
Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"

Allow for incorrect captitalization! "pOLitiCIaN" should still return "Your tax dollars".

*/

function getDrinkByProfession(param) {
    switch (param.toLowerCase()) {
        case 'jabroni': return 'Patron Tequila'
        case 'school counselor': return 'Anything with Alcohol'
        case 'programmer': return 'Hipster Craft Beer'
        case 'bike gang member': return 'Moonshine'
        case 'politician': return 'Your tax dollars'
        case 'rapper': return 'Cristal'
        default: return 'Beer'
    }
}