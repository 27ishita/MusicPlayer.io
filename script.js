const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", UpdatePlayIcon);
video.addEventListener("play", UpdatePlayIcon);
video.addEventListener("timeupdate", UpdateProgress);
play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("change", stopVideo);

progress.addEventListener("change", setVideoProgress);

//pause & play
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//update play icon

function UpdatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-stop fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  }
}

//update prgressand timestamp
function UpdateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  //Get seconds

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }
  timestamp.innerHTML = `${minutes}:${secs}`;
}

//stop video status
function stopVideo() {
  video.currentTime = 0;
  video.paused();
}

//set Status for video

function setVideoProgress() {
  video.currentTime = +(progress.value * video.duration) / 100;
}
