//define handlers
// assign a listener
// raise/emit an event
// handle that event

const globalEmitter = require('./lib/events.js');
const handler = require('./lib/handler.js');
// const pickup = require('./lib/vendor.js');
// const inTransit = require('./lib/driver.js');
// const delivered = require('./lib/vendor.js');

// // create handler
// const handler = (payload) => {
//   // handle that event
//   console.log(payload);
// };

// assign a listener (attach handlers with listeners)

globalEmitter.on('pickup', handler);

globalEmitter.on('in-transit', handler);

globalEmitter.on('confirmation', handler);

require('./lib/vendor.js');

require('./lib/driver.js');



