/* https://www.codewars.com/kata/5875b200d520904a04000003 */

function enough(cap, on, wait) {
  if (on + wait > cap) return on + wait - cap
  else return 0
}

enough = (cap, on, wait) => (on + wait > cap) ? on + wait - cap : 0