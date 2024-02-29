/* https://www.codewars.com/kata/59126992f9f87fd31600009b

Given a string, either 'black' or 'white' (lastPlayer) and a boolean (win)
Return 

*/

function whoseMove(lastPlayer, win) {
	switch (true) {
		case lastPlayer === 'white' && win:
			return 'white'
		case lastPlayer === 'white' && !win:
			return 'black'
		case lastPlayer === 'black' && win:
			return 'black'
		default:
			return 'white'
	}
}
