function AirTrafficControl() {}

AirTrafficControl.prototype.land = function(plane, airport) {
  airport.clearForLanding(plane);
};
