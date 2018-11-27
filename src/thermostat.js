function Thermostat() {
this._temperature = 20;
this._powersavemode = true;

  Thermostat.prototype.increaseTemp = function(amount) {
    if (this._powersavemode === true && this._temperature + amount < 26) {
      this._temperature += amount;
    } else if (this._powersavemode === false && this._temperature + amount < 33) {
      this._temperature += amount;
    } else { throw new Error("Maximum temperature has been exceeded");
  };

  Thermostat.prototype.decreaseTemp = function(amount) {
    if(this._temperature - amount < 10) {
      throw new Error("minimum temperature is 10c");
   } else {
     this._temperature -= amount;
 };

  Thermostat.prototype.powersaveon = function() {
    this._powersavemode = true;
  };

  Thermostat.prototype.powersaveoff = function() {
    this._powersavemode = false;
  };

};
