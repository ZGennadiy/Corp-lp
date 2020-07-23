"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var videoBtn = document.getElementById('playVideo');
  var overlay = document.querySelector('.overlay');
  var close = overlay.querySelector('.close');
  var player;

  var createPlayer = function createPlayer(url) {
    player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: url
    });
    overlay.style.display = 'flex';
  };

  videoBtn.addEventListener('click', function () {
    if (document.querySelector('iframe#frame')) {
      overlay.style.display = 'flex';
    } else {
      var path = videoBtn.getAttribute('data-url');
      createPlayer(path);
    }
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    player.stopVideo();
  });

  var videoInit = function videoInit() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  };

  videoInit();
});