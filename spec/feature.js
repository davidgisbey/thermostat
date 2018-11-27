describe("Thermostat", function() {

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("default settings", function() {
    it("starts at 20 degress", function() {
      expect(thermostat._temperature).toBe(20);
    });
  });

  describe("Temperature control", function() {
    it("temperature is increased by 10", function() {
      thermostat.increaseTemp(10);
      expect(thermostat._temperature).toBe(30);
    });

    it("temperature is decreased by 10", function() {
      thermostat.decreaseTemp(10);
      expect(thermostat._temperature).toBe(10);
    });
  });
});
