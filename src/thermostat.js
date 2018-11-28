"use strict";

function Thermostat() {
this._temperature = 20;
this._MINIMUM_TEMPERATURE = 10;
this._maximumTemperature = 25;
this._powerSaveMode = true;

 }


  Thermostat.prototype.increaseTemp = function(amount) {
    if (this._temperature + amount <= this._maximumTemperature) {
        this._temperature += amount;
    } else { throw new Error("Maximum temperature has been exceeded");
   }
  };

  Thermostat.prototype.decreaseTemp = function(amount) {
    if(this._temperature - amount < this._MINIMUM_TEMPERATURE) {
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
    this._maximumTemperature = 25;
  };

  Thermostat.prototype.powerSaveOff = function() {
    this._powerSaveMode = false;
    this._maximumTemperature = 32;
  };

  Thermostat.prototype.powerUsage = function() {
     if(this._temperature < 18) {
      return "low-usage";
   } else if(this._temperature >= 18 && this._temperature < 24) {
      return "medium-usage";
   } else {
      return "high-usage";
   }
};
