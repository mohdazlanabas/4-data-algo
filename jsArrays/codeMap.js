// .map()
// creates a NEW Array

//const newArray = values.map(value => value)

// const ages2018 = [21,45,56,32,45,34]
// const ages2021 = ages2018.map(age => age + 3)
// console.log(ages2021)

const housemates2018 = [
    {name: "Ahmad", age:24},
    {name: "Ellen", age:35},
    {name: "Woddy", age:30},
]
const housemates2021 = housemates2018.map( housemate => housemate.age + 2) 
console.log(housemates2021)
