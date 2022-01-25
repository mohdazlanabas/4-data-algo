
function sayHello (name) {
    console.log('Hello ' + name);
}
sayHello ('Azlan');

console.log(module);

const log = require('./logger');
log('message');

// PATH MODULE

const path = require ('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

// OS MODULE

const os = require ('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log('Total Memory: ' + (totalMemory / 1000));
console.log(`Free Memory: ${freeMemory / 1000}`);

// FS MODULE

const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function(err, files) {
    if (err) console.log('Error' , err);
    else console.log('Result', files);
});

// EVENT MODULE

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(){
    console.log('Listener Called');
});
emitter.emit('messageLogged');

console.log('0')

// Event Argument

emitter.on('messageLogged', function(arg){
    console.log('Listener Called', arg);
});
emitter.emit('messageLogged', {id:1, url: 'http://'});

console.log('0')

emitter.on('messageLogged', (arg) => {
    console.log('Listener Called', arg);
});
emitter.emit('messageLogged', {id:1, url: 'http://'});

// HTTP


/*const server = http.createServer();
server.on('connection', (socket) => {
    console.log('New connection ...');
});
server.listen(3000);
console.log('Listening on port 3000 ...');*/ 
const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.listen(3000);
console.log('Listening on port 3000...');






