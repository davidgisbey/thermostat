

$(document).ready(function() {
  var thermostat = new Thermostat();


  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  var location_temp = data.main.temp;
  var location_city = data.name
  $('#location_city').text(location_city);
  $('#location_temp').text(location_temp);


  });


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
