'use strict';

document.addEventListener("DOMContentLoaded", function(DOMReady) {
  console.log(DOMReady);

  var quips = [
    
  ];

  axios.get('/js/kwestions.json')
    .then(function(response) {
        var kwestions = response.data;
        var with_questions = kwestions.songs.filter((song) => {
          if (song.questions.length > 0) {
            return song;
          }
        });
        var song = randomChoice(with_questions);
        var kwestion = randomChoice(song.questions);
        console.log(song);
        console.log(kwestion);
      });
});

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}
