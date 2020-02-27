describe('Feature Test:', function(){
  var plane;
  var airport;
  var airTrafficControl;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    airTrafficControl = new AirTrafficControl();
  });

  describe('under normal conditions', function() {
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
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
  });

  describe('under stormy conditions', function() {

    it('blocks take off when the weather is stormy', function(){
      spyOn(Math, 'random').and.returnValue(0);
      airTrafficControl.land(plane, airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function(){ airTrafficControl.takeOff(plane, airport);}).toThrowError('cannot takeoff during storm');
      expect(airport.planes()).toContain(plane);
    });

    it('blocks landing when the weather is stormy', function(){
      spyOn(Math, 'random').and.returnValue(1);
      // spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){ airTrafficControl.land(plane, airport);}).toThrowError('cannot land during storm');
      expect(airport.planes()).not.toContain(plane);
    });
  });
});
