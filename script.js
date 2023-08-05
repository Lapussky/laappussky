const video = document.getElementById('myVideo');

video.addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen().catch(err => {
      console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(err => {
        console.log(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
      });
    }
  }
}
