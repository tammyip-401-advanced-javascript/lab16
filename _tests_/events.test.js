//import the same event emitter from events.js and manually emit the events pickup, in-transit and delivery. Then, you can spy on your console.log function, making sure that it was correctly called and that the correct message was logged out.

//test the handlers for the pickup, delivered and in-transit events

'use strict'

const globalEmitter = require('../lib/events.js');
const pickup = require('../lib/vendor.js');
const inTransit = require('../lib/driver.js');
const delivered = require('../lib/vendor.js');

let consoleSpy = jest.spyOn(console, 'log');

describe('test handler by emitting events', () => {
  it('calls handler on pickup', () => {
    consoleSpy.mockClear();

    let payload = {
      time: 'Time: 05/07/2020 1:30 PM',
      store: 'My Flower Shop',
      orderID: 1,
      customer: 'Billy Biggs',
      address: '123 Main Street, New York, NY',
    };

    globalEmitter.on('pickup', pickup);
    globalEmitter.emit('pickup', payload);
    expect(consoleSpy).toHaveBeenCalledWith(payload);
  });

  it('test inTransit handler function', () => {
    consoleSpy.mockClear();

    globalEmitter.on('inTransit', inTransit);
    globalEmitter.emit('inTransit', payload.orderID);

    expect(consoleSpy).toHaveBeenCalledWith(payload.orderID);
  });

  it('test delivered handler function', () => {
    consoleSpy.mockClear();

    globalEmitter.on('delivered', delivered);
    globalEmitter.emit('delivered', payload.orderID);

    expect(consoleSpy).toHaveBeenCalledWith(payload.orderID);
  });
});


