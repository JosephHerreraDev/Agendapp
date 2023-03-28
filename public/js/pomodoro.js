let timeLeft = 25 * 60;
let isTimerRunning = false;
let timerInterval;

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
};

const updateTimer = () => {
  timeLeft--;
  document.getElementById("time-left").textContent = formatTime(timeLeft);
  if (timeLeft === 0) {
    clearInterval(timerInterval);
    const timerLabel = document.getElementById("timer-label");
    if (timerLabel.textContent === "Session") {
      timerLabel.textContent = "Break";
      timeLeft = 5 * 60;
    } else {
      timerLabel.textContent = "Session";
      timeLeft = 25 * 60;
    }
    startTimer();
  }
};

const startTimer = () => {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
  }
};

const stopTimer = () => {
  if (isTimerRunning) {
    isTimerRunning = false;
    clearInterval(timerInterval);
  }
};

const resetTimer = () => {
  stopTimer();
  const timerLabel = document.getElementById("timer-label");
  timerLabel.textContent = "Session";
  timeLeft = 25 * 60;
  document.getElementById("time-left").textContent = formatTime(timeLeft);
};

document.getElementById("start_stop").addEventListener("click", () => {
  if (isTimerRunning) {
    stopTimer();
    document.getElementById("start_stop").textContent = "Start";
  } else {
    startTimer();
    document.getElementById("start_stop").textContent = "Stop";
  }
});

document.getElementById("reset").addEventListener("click", resetTimer);
