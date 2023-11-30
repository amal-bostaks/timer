document.addEventListener('DOMContentLoaded', function () {
  let timerInterval;
  let currentTime = 0;

  const timerDisplay = document.getElementById('timer');
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');
  const resetButton = document.getElementById('reset');
  const setTimeButton = document.getElementById('set');

  // Add the following line to create an audio element
  const audio = new Audio('path/to/your/soundfile.mp3'); // Change the path

  function updateDisplay() {
    const hours = Math.floor(currentTime / 3600);
    const minutes = Math.floor((currentTime % 3600) / 60);
    const seconds = currentTime % 60;

    timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Add the following condition to play the sound when the timer reaches zero
    if (currentTime === 0) {
      playSound();
    }
  }

  function startTimer() {
    timerInterval = setInterval(function () {
      if (currentTime > 0) {
        currentTime--;
        updateDisplay();
      } else {
        stopTimer();
      }
    }, 1000);

    startButton.disabled = true;
    stopButton.disabled = false;
  }

  function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
  }

  function resetTimer() {
    clearInterval(timerInterval);
    currentTime = 0;
    updateDisplay();
    startButton.disabled = false;
    stopButton.disabled = false;
  }

  function setTimer() {
    const setTimeInput = document.getElementById('setTime');
    const setTime = setTimeInput.value;
    const [hours, minutes, seconds] = setTime.split(':').map(Number);

    currentTime = hours * 3600 + minutes * 60 + seconds;
    updateDisplay();
  }

  // Add the following function to play the sound
  function playSound() {
    audio.play();
  }

  startButton.addEventListener('click', startTimer);
  stopButton.addEventListener('click', stopTimer);
  resetButton.addEventListener('click', resetTimer);
  setTimeButton.addEventListener('click', setTimer);
});
