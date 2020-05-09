'use strict'

//alert the system that a package needs to be delivered

//should automatically generate a new order every 5 seconds
//These random orders hould have a store, id, customer, and address as the order data.

//When a new customer order is generated, a pickup event should emit, and a payload should be sent out with the full order data.

//also listen for the delivered event, and when emitted it should log a thank you message to the console, showing the ID of the order that was delivered.

const globalEmitter = require('./events.js');
const faker = require('faker');

// raise an event

setInterval(() => {
  const order = {
    time: faker.date.recent(),
    store: 'My Flower Shop',
    orderID: faker.random.number(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`,
  };

  globalEmitter.emit('pickup', order);
}, 5000);

// assign a listener
globalEmitter.on('delivered', (payload) => {
  console.log(
    `VENDOR says: "Thank you for delivering order ${payload.orderID}"`,
  );
  globalEmitter.emit('confirmation', `Delivered order ${payload.orderID}`);
});

// module.exports = { pickup, delivered };
