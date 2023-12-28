/* 
In Node.js, the EventEmitter class is one of the core components provided by the events module. It is used to handle events and event-driven programming. An EventEmitter object emits named events whenever a significant occurrence in the application happens, and it can have listeners subscribed to these events.


Emitting Events: An EventEmitter object can emit events using the .emit() method.

Listening to Events: You can add listeners to an event using the .on() or .addListener() methods. These listeners are functions that will be called when the event is emitted.
*/




const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listener for the 'message' event
emitter.on('message', (arg) => {
  console.log(`A message event occurred with data:`, arg);
});

// Emitting the 'message' event
emitter.emit('message', { id: 1, text: 'Hello World!' });
