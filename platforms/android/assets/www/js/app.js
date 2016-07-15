var deviceReadyDeferred = $.Deferred();
var jqmReadyDeferred = $.Deferred();

$(document).on("deviceready", function() {
  deviceReadyDeferred.resolve();
});

$(document).on("mobileinit", function () {
  jqmReadyDeferred.resolve();
});

$.when(deviceReadyDeferred, jqmReadyDeferred).then(init);


function init() {
    navigator.geolocation.getCurrentPosition(onGeolocationSuccess,onGeolocationError);
}


function onGeolocationSuccess(position){
    $("#latitude").text(position.coords.latitude);
    $("#longitude").text(position.coords.longitude);
    $("#altitude").text(position.coords.altitude);
    $("#accuracy").text(position.coords.accuracy);
    $("#altitudeAccuracy").text(position.coords.altitudeAccuracy);
    $("#heading").text(position.coords.heading);
    $("#speed").text(position.coords.speed);
    $("#timestamp").text(position.coords.timestamp);
}

function onGeolocationError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


