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

  it('planes can be instructed to take off from an airport', function(){
    airTrafficControl.land(plane, airport);
    airTrafficControl.takeOff(plane, airport);
    expect(airport.planes()).not.toContain(plane);
  });

  it('blocks take off when the weather is stormy', function(){
    airTrafficControl.land(plane, airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ airTrafficControl.takeOff(plane, airport);}).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });
});
