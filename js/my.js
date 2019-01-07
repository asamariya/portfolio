const videos = document.querySelectorAll('video');

function videoControls() {
  videos.forEach((video) => {
    this.video = video;
    video.addEventListener('mouseover', () => {
      video.play();
    });

    video.addEventListener('mouseout', () => {
      video.pause();
    });

    video.addEventListener('touchstart', () => {
      video.play();
    });

    video.addEventListener('touchend', () => {
      video.pause();
    });
  });
}

videoControls()

/* Open */
function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

/* Close */
function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}


$('.launch-modal').on('click', (e) => {
  e.preventDefault();
  $(`#${$(this).data('modal-id')}`).modal();
});
