describe('Weather', function(){
  var weather;
  beforeEach(function(){
    weather = new Weather;
  });
  it('is stormy sometimes', function() {
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy;
  });
});
