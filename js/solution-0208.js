/* https://www.codewars.com/kata/56598d8076ee7a0759000087

Given a number (amount) and a string (rating),

Return a number (tip) by calculating a percentage of the number based on the string,

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%

if (rating.toLowerCase() === 'excellent') return Math.ceil(amount * .2)
if (rating.toLowerCase() === 'great') return Math.ceil(amount * .15)
if (rating.toLowerCase() === 'good') return Math.ceil(amount * .1)
if (rating.toLowerCase() === 'poor') return Math.ceil(amount * .05)
else 0

*/

function calculateTip(amount, rating) {
    switch (rating.toLowerCase()) {
        case 'excellent': return Math.ceil(amount * .2)
        case 'great': return Math.ceil(amount * .15)
        case 'good': return Math.ceil(amount * .1)
        case 'poor': return Math.ceil(amount * .05)
        case 'terrible': return 0
        default: return 'Rating not recognised'
    }
}

function calculateTip(amount, rating) {

    let tips = {
        'excellent' : .2,
        'great' : .15,
        'good' : .1,
        'poor' : .05,
        'terrible' : 0
    }

    rating = rating.toLowerCase()

    return rat in tips ? Math.ceil(amount * tips[rating]) : 'Rating not recognised'
}