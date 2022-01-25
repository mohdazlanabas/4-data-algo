/// .every()
//if everything in our array matches a rule, return true

//const testResults = [45,34,76,89,45,29,67]
//const classPassed = testResults.every(result => result > 30)
//console.log(classPassed)

const animals = ['cat', 'rat', 'dog', 'ant']
const animalLength = animals.every(animals  => animals.length == 3)
console.log(animalLength)