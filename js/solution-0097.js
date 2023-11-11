/* https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

Given an array of strings...

Return a new array by filtering out any elements that appear in the geese variable.
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

Examples:
gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]

Pseudocode:
Filter the input array (birds)
Remove the elements that appear in the geese array

*/

function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    return birds.filter(e => !geese.includes(e))
}

let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
const gooseFilter = birds => birds.filter(e => !geese.includes(e))