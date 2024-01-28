/* https://www.codewars.com/kata/591588d49f4056e13f000001

Given a string (code) as input...

if (code === 'H') return 'Hello World!'
if (code === 'Q') return code


*/

function HQ9(code) {
    if (code === 'H') return 'Hello World!'
    if (code === 'Q') return code
    if (code === '9') return generateBeerSong()
}

function generateBeerSong() {
    let song = '';
    for (let i = 99; i > 0; i--) {
      song += `${i} bottle${i !== 1 ? 's' : ''} of beer on the wall, ${i} bottle${i !== 1 ? 's' : ''} of beer.\n`;
      song += `Take one down and pass it around, ${i - 1 === 0 ? 'no more' : i - 1} bottle${i - 1 !== 1 ? 's' : ''} of beer on the wall.\n`;
    }
    song += 'No more bottles of beer on the wall, no more bottles of beer.\n';
    song += 'Go to the store and buy some more, 99 bottles of beer on the wall.';
    return song;
}