const superHeroAbilities = {
    specialPower: "laserbeams",
    weakness: "kryptonite",
}
console.log(superHeroAbilities);

//if I know the name
superHeroAbilities.iKnowTheName = "Superman";

console.log(superHeroAbilities);

//If i don't know the name
const thisPropertyShouldExistOnTheObject = "strength"

console.log(thisPropertyShouldExistOnTheObject)
superHeroAbilities[thisPropertyShouldExistOnTheObject] = 30
console.log(superHeroAbilities)