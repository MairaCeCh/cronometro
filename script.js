const stopwath = document.getElementById("stopwatch");
const playPauseButton = document.getElementById("play-pause");
const secondsSphere = document.getElementById("seconds-sphere");

let stopwatchInterval;
let runningTime = 0;

const playPause = () => {
  const isPaused = !playPauseButton.classList.contains("running");
  if (isPaused) {
    playPauseButton.classList.add("running");
    start();
  } else {
    playPauseButton.classList.remove("running");
    pause();
  }
};

const pause = () => {
  secondsSphere.style.animationPlayState = "paused";
  clearInterval(stopwatchInterval);
};
const stop = () => {
  secondsSphere.style.transform = "rotate(-90deg) translateX(60px)";
  secondsSphere.style.animation = "none";
  playPauseButton.classList.remove("running");
  runningTime = 0;
  clearInterval(stopwatchInterval);
  stopwath.textContent = "00:00";
};

const start = () => {
  secondsSphere.style.animation = "rotacion 60s linear infinite";
  let starTime = Date.now() - runningTime;
  secondsSphere.style.animationPlayState = "running";
  stopwatchInterval = setInterval(() => {
    runningTime = Date.now() - starTime;
    stopwath.textContent = calculateTime(runningTime);
  }, 1000);
};

const calculateTime = (runningTime) => {
  const total_seconds = Math.floor(runningTime / 1000);
  const total_minutes = Math.floor(total_seconds / 60);
  const diplay_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const diplay_minutes = total_minutes.toString().padStart(2, "0");
  return `${diplay_minutes}:${diplay_seconds}`;
};
