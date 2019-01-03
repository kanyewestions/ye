'use strict';

document.addEventListener("DOMContentLoaded", function(DOMReady) {
  var quips = [
    'That was Yeezy.',
    'Too Yeezy.',
    'Ye are good!',
    'Oh ye!',
    'Yeesh, that was tough.',
    'Kanye answer it?',
    'Kwest for the win.',
    'Kanye stop?',
    'Ye are a legend.',
    'Kanye believe it?',
    'Ye got this!',
    'Kanye stop?',
    'No need to be chi.',
    'Yeezy peasy.'
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
        var quip = randomChoice(quips);
        var kanye = document.getElementById('head').children[0].getAttribute('src');

        document.getElementById('kwestion').children[0].innerHTML = kwestion;
        document.getElementsByTagName('title')[0].innerHTML = kwestion + ' - Kwestion';
        document.getElementById('next').innerHTML = quip;
        document.getElementById('trackinfo').innerHTML = song.song_title;

        document.getElementById('next').onclick = function(event) {
          event.preventDefault();
          var song = randomChoice(with_questions);
          var kwestion = randomChoice(song.questions);
          var quip = randomChoice(quips);

          document.getElementById('kwestion').children[0].innerHTML = kwestion;
          document.getElementById('next').innerHTML = quip;
          document.getElementById('trackinfo').innerHTML = song.song_title;
          document.getElementsByTagName('title')[0].innerHTML = kwestion + ' - Kwestion';
          document.querySelector('meta[property~="og:title"]').setAttribute('content',kwestion);
          document.querySelector('meta[property~="og:image"]').setAttribute('content', window.location.origin + '/'+ kanye);
          }
        });
});

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}
