(function ($) {
  $(function () {
    $('.sidenav').sidenav();
  }); // end of document ready
})(jQuery); // end of jQuery name space


document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
  //document.getElementById('deviceready').classList.add('ready');
}

document.addEventListener('DOMContentLoaded', function () {
  $('.sidenav').sidenav();

  var options = { "swipeable": true };
  var el = document.querySelectorAll('tabs');
  var instance = M.Tabs.init(el, options);
})