const stopwatchCounterStart = document.getElementById("start");
const stopwatchCounterReset = document.getElementById("reset");
const stopwatchCounterPause = document.getElementById("pause");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Steps
/**
 * Step 1
 * Find Necessary Function
 */

/**
 * Step 2
 * Add Event Listeners
 */

/**
 * Step 3
 * Find Data and Variables
 */

/**
 * Step 4
 * Implement Start Functionality
 */

/**
 * Step 5
 * Implement getTime()
 */

/**
 * Step 6
 * Implement Pause Functionality
 */

/**
 * Step 7
 * Implement Reset Functionality
 */

/**
 * Step 8
 * Tweak Stopwatch Using Flag Variable
 */
let min;
let sec = 0;
let timer = null;
let watchIsRunning = false;

function start() {
  if (!watchIsRunning) {
    watchIsRunning = true;
    timer = setInterval(function () {
      sec++;
      let { min, second } = getTime(sec);
      minutes.textContent = min < 10 ? "0" + min : min;
      seconds.textContent = second < 10 ? "0" + second : second;
    }, 1000);
  }
}

function reset() {
  watchIsRunning = false;
  clearInterval(timer);
  min = 0;
  sec = 0;
  minutes.textContent = "00";
  seconds.textContent = "00";
}

function pause() {
  watchIsRunning = false;
  clearInterval(timer);
}

function getTime(sec) {
  min = parseInt(sec / 60); // 122 / 60 = 2  122 % 60 = 2
  let second = parseInt(sec % 60);
  return {
    min,
    second,
  };
}

stopwatchCounterStart.addEventListener("click", start);
stopwatchCounterReset.addEventListener("click", reset);
stopwatchCounterPause.addEventListener("click", pause);
