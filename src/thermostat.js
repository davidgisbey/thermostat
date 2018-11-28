function Thermostat() {
this._temperature = 20;
this._powerSaveMode = true;

 };


  Thermostat.prototype.increaseTemp = function(amount) {
    if (this._powerSaveMode === true && this._temperature + amount < 26) {
        this._temperature += amount;
    } else if (this._powerSaveMode === false && this._temperature + amount < 33) {
        this._temperature += amount;
    } else { throw new Error("Maximum temperature has been exceeded");
   }
  };

  Thermostat.prototype.decreaseTemp = function(amount) {
    if(this._temperature - amount < 10) {
      throw new Error("minimum temperature is 10c");
   } else {
     this._temperature -= amount;
   }
 };

  Thermostat.prototype.reset = function() {
    this._temperature = 20;
  };

  Thermostat.prototype.powerSaveOn = function() {
    this._powerSaveMode = true;
  };

  Thermostat.prototype.powerSaveOff = function() {
    this._powerSaveMode = false;
  };

  Thermostat.prototype.powerUsage = function() {
     if(this._temperature < 18) {
      return "low-usage";
   } else if(this._temperature >18 && this._temperature < 24) {
      return "medium-usage";
   } else {
      return "high-usage";
   }
};
