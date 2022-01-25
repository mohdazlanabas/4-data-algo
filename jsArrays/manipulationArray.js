const items = [
    { name: 'Bike', price: 100},
    { name: 'TV', price: 200},
    { name: 'Album', price: 10},
    { name: 'Book', price: 5},
    { name: 'Phone', price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25},
]
const filteredItems = items.filter((item) => {
    return item.price <= 100
})
console.log(items)
console.log(filteredItems)

const itemNames = items.map((item) => {
    return item.name })
console.log(itemNames)

const itemPrice = items.map((item) => {
    return item.price })
console.log(itemPrice)

const foundItem = items.find((item) => {
    return item.name })
console.log(foundItem)

const foundItem2 = items.find((item) => {
    return item.name === 'Album'})
console.log(foundItem2)

items.forEach((item)  => {
    console.log(item.name)
})

items.forEach((item)  => {
    console.log(item.price)
})

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100 })
console.log(hasInexpensiveItems)

const hasInexpensiveItems2 = items.some((item) => {
    return item.price <= 4 })
console.log(hasInexpensiveItems2)

const hasInexpensiveItems3 = items.every((item) => {
    return item.price <= 100 })
console.log(hasInexpensiveItems3)

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal }, 0)
console.log(total)

