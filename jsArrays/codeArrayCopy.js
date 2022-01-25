let a = [1,2,3,4,5,6,7,8,9,0];
let b =[];
for (let i=0; i < a.length; i++){
    b.push(a[i]);
}
let c = [...a]

console.log(a)
console.log(b)
console.log(c)