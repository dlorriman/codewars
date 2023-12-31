/* https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

Given a number 1-7...
Return the day of the week 'Sunday' through 'Saturday' as a string.
Else return 'Wrong, please enter a number between 1 and 7'

Examples:
1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"

*/

// using a switch statement
function whatday(num) {
    switch (num) {
        case 1: return 'Sunday'
        case 2: return 'Monday'
        case 3: return 'Tuesday'
        case 4: return 'Wednesday'
        case 5: return 'Thursday'
        case 6: return 'Friday'
        case 7: return 'Saturday'
        default: return 'Wrong, please enter a number between 1 and 7'
    }
}

// using an array literal
function whatday(num) {
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    return days[num-1] || 'Wrong, please enter a number between 1 and 7'
}

// using an object literal
function whatday(num) {
    let days = {
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday',
        6: 'Friday',
        7: 'Saturday',
    }
    return days[num] || 'Wrong, please enter a number between 1 and 7'
}