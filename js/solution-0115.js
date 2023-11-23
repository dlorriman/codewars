/* https://www.codewars.com/kata/5b16490986b6d336c900007d

Input: an object containing key:value pairs
Output: an array containing keys if the value is 60 or above

Examples:
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

*/

function myLanguages(results) {
    return Object.entries(results)
        .filter(([_, score]) => score >= 60)
        .sort((a, b) => b[1] - a[1])
        .map(([language, _]) => language);
}

function myLanguages(results) {
    return Object.keys(results)
        .filter(language => results[language] >= 60)
        .sort((a, b) => results[b] - results[a])
        .map(language => language);
}