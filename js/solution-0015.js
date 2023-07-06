// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

function howManySmaller(arr,n) {
    return arr.filter(x => +x.toFixed(2) < n).length
}

const howManySmaller = (arr, n) =>
  arr.filter(val => val.toFixed(2) < n).length