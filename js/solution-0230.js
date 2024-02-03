/* https://www.codewars.com/kata/57613fb1033d766171000d60

*/

function uefaEuro2016(teams, scores) {
    const [team1, team2] = teams
    const [score1, score2] = scores
  
    if (score1 > score2) {
      return `At match ${team1} - ${team2}, ${team1} won!`
    } else if (score1 < score2) {
      return `At match ${team1} - ${team2}, ${team2} won!`
    } else {
      return `At match ${team1} - ${team2}, teams played draw.`
    }
}