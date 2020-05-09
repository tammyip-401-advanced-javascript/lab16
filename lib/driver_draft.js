const emitter = require('./lib/events.js');
const pickup = require('./handlers_draft').driverPickupHandler;
const delivery = require('./handlers_draft').driverDeliveredHandler;

//define handlers
const goOutForDelivery = (payload) => {
  emitter.emit('in-transit', payload);
  setTimeout(() => {
    emitter.emit('delivered', payload);
  }, 1000);
}

// attach handlers with listeners
// - listen to pickup
// emitter.on('pickup', pickup);
// emitter.on('pickup', goOutForDelivery);
// emitter.on('delivered', delivery);

//raise/emit events
// - emit in transit
// - emit delivered



