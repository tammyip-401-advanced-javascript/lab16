// assign a listener
// raise an event
// handle that event

const globalEmitter = require('./lib/events.js');
const pickup = require('./lib/vendor.js');
const inTransit = require('./lib/driver.js');
const delivered = require('./lib/vendor.js');

// my event is 'shout-in-forest'

// create handler
const pickup = (payload) => {
  // handle that event
  console.log(payload);
};

const inTransit = (payload) => {
  console.log(payload);
};

const delivered = (payload) => {
  console.log(payload);
};

// assign a listener

globalEmitter.on('pickup', pickup);

globalEmitter.on('in-transit', inTransit);

globalEmitter.on('delivered', delivered);

require('./lib/vendor.js');
require('./lib/driver.js');