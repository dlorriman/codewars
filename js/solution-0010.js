// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr) {
  let odd = [], even =[]
      
  for (i of arr) {
      ((i % 2) ? odd : even).push(i)    
  }
      
  return [odd, even]
}

