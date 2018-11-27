function Thermostat() {
this._temperature = 20;


  Thermostat.prototype.increaseTemp = function(amount) {
    this._temperature += amount;
  };

  Thermostat.prototype.decreaseTemp = function(amount) {
    if(this._temperature - amount < 10) {
      throw new Error("minimum temperature is 10c");
   } else {
     this._temperature -= amount;
   }
 };
};
