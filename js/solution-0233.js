// https://www.codewars.com/kata/59c287b16bddd291c700009a

function iceBrickVolume(radius, bottleLength, rimLength) {
    let height = bottleLength - rimLength
    return radius * radius * (height + height)
}