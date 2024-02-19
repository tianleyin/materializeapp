(function ($) {
  $(function () {
    // Inicializar la barra lateral
    $('.sidenav').sidenav();
  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // Cordova está ahora inicializado. ¡Diviértete!
  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
  //document.getElementById('deviceready').classList.add('ready');
}

document.addEventListener('DOMContentLoaded', function () {
  // Inicializar la barra lateral nuevamente (por si acaso)
  $('.sidenav').sidenav();

  // Inicializar las tabs
  var options = { "swipeable": true };
  var el = document.querySelector('#tabs-swipe-demo');
  var instance = M.Tabs.init(el, options);
});


document.addEventListener('DOMContentLoaded', function () {
  // Inicializar los tabs de Materialize
  var tabs = document.querySelectorAll('.tabs');
  M.Tabs.init(tabs);

  // Evento de clic para el botón de búsqueda
  document.getElementById('searchBtn').addEventListener('click', function () {
    // Obtener el término de búsqueda ingresado por el usuario
    var searchTerm = document.getElementById('searchInput').value;

    // URL de la API de noticias con el término de búsqueda
    var apiUrl = 'https://api.currentsapi.services/v1/search?' +
      'keywords=' + encodeURIComponent(searchTerm) + '&language=en&' +
      'apiKey=GCnw_Tjr-46CwGKsktqBs4W-8XPOxlxLQRH_30vPJb2tGRRR';

    // Realizar la solicitud a la API
    fetch(apiUrl)
      .then(function (response) {
        // Verificar si la solicitud fue exitosa
        if (response.ok) {
          // Convertir la respuesta a formato JSON
          return response.json();
        }
        // Si la respuesta no fue exitosa, lanzar un error
        throw new Error('Network response was not ok.');
      })
      .then(function (data) {
        // Mostrar los resultados en el segundo tab
        var resultsTab = document.getElementById('test-swipe-2');
        resultsTab.innerHTML = ''; // Limpiar el contenido existente

        // Crear una lista de resultados
        var resultList = document.createElement('ul');
        resultList.classList.add('collection');

        // Iterar sobre los resultados y agregarlos a la lista
        data.news.forEach(function (article) {
          var listItem = document.createElement('li');
          listItem.classList.add('collection-item');
          listItem.textContent = article.title;
          resultList.appendChild(listItem);
        });

        // Agregar la lista de resultados al segundo tab
        resultsTab.appendChild(resultList);
      })
      .catch(function (error) {
        // Manejar cualquier error que ocurra durante la solicitud
        console.error('There was a problem with the fetch operation:', error);
      });
  });
});
