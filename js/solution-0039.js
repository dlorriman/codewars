// https://www.codewars.com/kata/586c1cf4b98de0399300001d

function combat(health, damage) {
    return health - damage > -1 ? health - damage : 0
//  return health < damage ? 0 : health - damage
//  return Math.max(0, health - damage)
}

const combat = (health, damage) => Math.max(0, health - damage)