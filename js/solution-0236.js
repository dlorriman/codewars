/* https://www.codewars.com/kata/55849d76acd73f6cc4000087

Given a number...

if (n < 101) return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."

*/

function playerRankUp(n) {
	if (n >= 100)
		return 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.'
	else return false
}
