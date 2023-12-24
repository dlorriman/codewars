// https://www.codewars.com/kata/5a360620f28b82a711000047

function defineSuit(card) {
    if (card[card.length-1] === '♣') return 'clubs'
    if (card[card.length-1] === '♦') return 'diamonds'
    if (card[card.length-1] === '♥') return 'hearts'
    if (card[card.length-1] === '♠') return 'spades'
}

function defineSuit(card) {
    if (card.includes('♣')) return 'clubs'
    if (card.includes('♦')) return 'diamonds'
    if (card.includes('♥')) return 'hearts'
    if (card.includes('♠')) return 'spades'
}