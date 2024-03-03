/* const express = require('express');
const app = express();

app.get('*',(req,res)=>{
    res.send('welcome');
});


app.listen(3000,()=>{
    console.log('runing on 3000');
}); */


const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.on('eventname', function (args) {
    console.log(`some event has happened ${args}`);
});

const obj = { 'id': 1, 'message': 'Okkk' };

emitter.emit('eventname', obj);




