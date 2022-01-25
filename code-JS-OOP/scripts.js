
/*
// Factory Function
function createCircle1(radius) {
   return {
        radius,
        draw: function() {
            console.log('Draw01');
        }
    };
}
const circle1 = createCircle1(); 
*/

/*
// Constructor Function
function Circle2(radius) {
//    console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log('Draw02')
    }
}
*/

/*
const Circle3 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('Draw03');
    }
    `);
const circle3 = new Circle3(1);
Circle3.call ({}, 1)
Circle3.apply ({}, [1,2,3]);
*/

/*
const another = new Circle(1); 

let a = 10;
let b = a;
a = 20;

let c = {value: 10};
let d = c;
c.value = 20; 
*/

/*
let number = 10;
function increase(number) { number++;}
increase(number);
console.log(number);

let obj = {value: 20};
function increase(obj) {obj.value++}
increase(obj);
console.log(obj);
*/

/*
function Circle4(radius) {
        this.radius = radius;
        this.draw = function() {
            console.log('Draw04')
        }
    }
const circle4 = new Circle4(10);

circle4.location = { x: 1};
circle4['location'] = {x:1};

const propertyName = 'location';
circle4['propertyName'] = {x:1};

delete circle4['location'];
*/

/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

 for (let key in circle) {
     if (typeof circle[key] !== 'fuction')
     console.log(key, circle[key]);
 }
const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
 console.log('Circle has a radius.')
 */

 function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = {x: 0, y:0};
    this.computerOptimumLocation = function () {
        // ...
    }
    this.draw = function () {
        console.log('draw');
    };
 }
const circle = new Circle(10);
circle.computerOptimumLocation();
circle.draw();
