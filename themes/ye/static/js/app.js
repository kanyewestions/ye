'use strict';

document.addEventListener("DOMContentLoaded", function(DOMReady) {
  console.log(DOMReady);

  console.log(window.location.origin);
  console.log(window.location.host);
  console.log(window.location.protocol);

  var go = axios.create({
    baseURL: window.location.protocol + window.location.host
  });

  var kwestions = go.get('http://localhost:1313/js/kwestions.json')
      .then(function(response) {
        return response.data;
      });

});
