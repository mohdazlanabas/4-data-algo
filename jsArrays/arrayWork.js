//.every
// Using every write a function that checks whether every number in
// an array is a square number
// eg. checkSquare [19,16,81]) => true

//const numbers = [9,16,81]
//function checkSquares(){
//    return numbers.every(number => Math.sqrt(number) % 1 === 0)}
//console.log(checkSquares())

//.filter
//Using an array method, write a function that returns the string
//elements of an array that have a given length or larger.
// eq. getWrods ['Florida', 'Dog', 'Phone']
//const wordsArray = ['Florida', 'Dog', 'Phone']
//const number = 5

//function getWords(array, number){
//    return array.filter(word => word.length >= number)}
//console.log(getWords(['Florida', 'Dog', 'Phone'], 5))
//console.log(getWords(['pen','astronaut','puppy'],6 ))

//.map01
//Using 'map' write a function that converts farenheit to celcius.
// eg: getCelcius((23, 140, 212, 41]) => [-5, 60, 100,5]
// (num - 32) * 5/9 = C

//const farenheit = [23, 140, 212,41]
//function getCelcius(){
//    return farenheit.map(value => (value - 32) *(5/9))}
//console.log(getCelcius())

//.map02
// Uisng an array method, write a function that converts an array of cm values
// as strings, into an array of numbers.
// eg. getValues ['23cm'. '5.6cm', '1000cm']) => [23, 5.6,1000]
// const cmValues = ['23cm' '5.6cm', '1000cm')

//function getValues(array) {
//    return array.map(value => parseFloat(value))}
//console.log(getValues(['34cm', '45cm', '1.2cm']))
//console.log(getValues(['3cm', '4cm','7cm']))

//.map and .split
//Using 'split'. 'map' and 'join' wtite a function that capitalise the
//first letter of each word in a sentence
// eg. capitalise ('the queens gambit') => ('The Queens Gambit')
//const title = 'the queens gambit'

//function capitalise(title) {
//    return title.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ')}
//console.log(capitalise('the queens gambit'))

//.reduce
// Using 'reduce' write a function that will return the total number
// of characters in an array of strings
// eq. getTotal((['Rabbit', 'Football', 'Cracking'])) => 22

//const words = ['Rabbit', 'Football', 'Cracking']
//function getTotal(){
//    return words.reduce((total, word) => total + word.length,0)}
//console.log(getTotal())

//.some
//Using 'some' write a function that checks an array for a 'falsey' value.
//eg. checkForFalsey,([11, NaN [], 'Angels]) => true

//const array = [11, NaN, [], 'Angels']
//function checkForFalsey(){
//    return array.some(item => item) }
//console.log(checkForFalsey())

//.split and .filter
//Using 'split' and 'filter' write a function that counts the number of vowelsina  sentence.
// eq: getVowelCount ('Is West Philidelphia, born and raised') => 12
//const saying = 'Is West Philidelphia, born and raised'

const vowels = ['a', 'e','i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
function getVowelCount(sentence){
    return sentence.split(' ').filter(letter => vowels.includes(letter)).length
}
console.log(getVowelCount('I am a dog'))
console.log(getVowelCount('Hello there everyone'))