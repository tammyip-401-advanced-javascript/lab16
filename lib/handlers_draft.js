



// define handlers
const vendorDeliveredHandler = (payload) => {
  console.log(
    "VENDOR says: \"Thank you for delivering order", payload.id, "\""
  );
};

const driverPickupHandler = (payload) => {
  console.log("DRIVER picked up order", payload.id);
};

const driverDeliveredHandler = (payload) => {
  console.log("DRIVER picked up order", payload.id);
}

const pickupOrderLogger = (payload) => {
  console.log("EVENT pickup");
  console.log("-Time:", new Date());
  console.log("-Store:", payload.store);
  console.log("-OrderID:", payload.id);
  console.log("-Customer:", payload.name);
};

const inTransitOrderLogger = (payload) => {
  console.log('EVENT in-transit', payload)
}

module.exoports = {
  vendorDeliveredHandler,
  driverPickupHandler,
  driverDeliveredHandler,
};