window.addEventListener('DOMContentLoaded', () => {
  const videoBtn = document.getElementById('playVideo');
  const overlay = document.querySelector('.overlay');
  const close = overlay.querySelector('.close');
  let player;

  const createPlayer = (url) => {
    player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: url,
    });
    overlay.style.display = 'flex';
  };

  videoBtn.addEventListener('click', () => {
    if (document.querySelector('iframe#frame')) {
      overlay.style.display = 'flex';
    } else {
      const path = videoBtn.getAttribute('data-url');
      createPlayer(path);
    }
  });


  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    player.stopVideo();
  });


  const videoInit = () => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  };

  videoInit();
});