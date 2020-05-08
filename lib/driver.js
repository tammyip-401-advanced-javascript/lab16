'use strict'

//alert the system when a package is picked up for delivery
//alert the system when the package has been delivered

//pickup - Tells the system when a new order needs to be delivered
//in-transit - Tells the system which order is in the process of being delivered
//delivered - Tells the system when the order has been delivered

//listen for the pickup event. When that event is emitted, the driver should emit the in-transit event and simulate the delivery process with a timer.
//Use a timer to wait 3 seconds, and then emit the delivered event, passing along the order that was delivered in the payload.

const globalEmitter = require('./events.js');

//listen for the pickup event
globalEmitter.on('pickup', (payload) => {
  console.log(`DRIVER picked up order ${payload.orderID}`);
  globalEmitter.emit('inTransit', `order ${payload.orderID}`);

  setTimeout(() => {
    console.log(`DRIVER delivered ${payload.orderID}`);
    globalEmitter.emit('delivered', payload);
  }, 3000);
});
