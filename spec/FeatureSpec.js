describe('Feature Test:', function(){
  var plane;
  var airport;
  var airTrafficControl;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    airTrafficControl = new AirTrafficControl();
  });

  it('planes can be instructed to land at an airport', function(){
    airTrafficControl.land(plane, airport);
    expect(airport.planes()).toContain(plane);
  });
});
