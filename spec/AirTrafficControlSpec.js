describe('AirTrafficControl', function(){
  var airTrafficControl;
  var plane;
  var airport;
  beforeEach(function(){
    airTrafficControl = new AirTrafficControl();
    plane = jasmine.createSpy('plane')
    airport = jasmine.createSpyObj('airport', ['clearForLanding']);
  });
  it('can land a plane at an airport', function(){
    airTrafficControl.land(plane, airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
});
