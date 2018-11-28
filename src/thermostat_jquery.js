

$(document).ready(function() {
  var thermostat = new Thermostat();



  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    console.log(thermostat.powerUsage());
    $('#temperature').attr('class', thermostat.powerUsage());
  }

  updateTemperature();

  $('#temp_up').on('click', function() {
    thermostat.increaseTemp(1);
    updateTemperature();
  });

  $('#temp_down').on('click', function() {
    thermostat.decreaseTemp(1);
    updateTemperature();
  });

  $('#reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#psm_on').on('click', function() {
    thermostat.powerSaveOn();
    updateTemperature();
  });

  $('#psm_off').on('click', function() {
    thermostat.powerSaveOff();
    updateTemperature();
  });


});
