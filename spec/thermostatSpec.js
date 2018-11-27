describe("Thermostat", function() {

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("default settings", function() {
    it("starts at 20 degress", function() {
      expect(thermostat._temperature).toBe(20);
    });

    it("minumum temperature is 10 degrees", function() {
      expect(function(){thermostat.decreaseTemp(11);}).toThrowError('minimum temperature is 10c');
    });
  });

  describe("Temperature control", function() {
    it("temperature is increased by 5", function() {
      thermostat.increaseTemp(5);
      expect(thermostat._temperature).toBe(25);
    });

    it("temperature is decreased by 10", function() {
      thermostat.decreaseTemp(10);
      expect(thermostat._temperature).toBe(10);
    });
  });

  describe("Power Saving mode", function() {
    it("Has a max temp of 25 degrees when ON", function(){
      thermostat.powersaveon(true);
      expect(function(){thermostat.increaseTemp(6);}).toThrowError('Maximum temperature has been exceeded')
    });

    it("has a max temp if 32 degress when off", function() {
      thermostat.powersaveoff();
      thermostat.increaseTemp(10)
      expect(function(){thermostat.increaseTemp(3);}).toThrowError('Maximum temperature has been exceeded')
    });

    it("on by default", function() {
    expect(thermostat._powersavemode).toEqual(true)
    });
  });
});
