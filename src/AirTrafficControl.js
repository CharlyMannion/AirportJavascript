function AirTrafficControl() {}

AirTrafficControl.prototype.land = function(plane, airport) {
  airport.clearForLanding(plane);
};

AirTrafficControl.prototype.takeOff = function(plane, airport) {
  airport.clearForTakeOff(plane);
};
