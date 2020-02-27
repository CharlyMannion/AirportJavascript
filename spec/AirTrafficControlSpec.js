describe('AirTrafficControl', function(){
  var airTrafficControl;
  var plane;
  var airport;

  beforeEach(function(){
    airTrafficControl = new AirTrafficControl();
    plane = jasmine.createSpy('plane')
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']);
  });
  it('can land a plane at an airport', function(){
    airTrafficControl.land(plane, airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  it('can take a plane off from an airport', function(){
    airTrafficControl.land(plane, airport);
    airTrafficControl.takeOff(plane,airport);
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
  });
});
