var startTime;
var updatedTime;
var difference;
var timerInterval;
var savedTime;

var paused = false;
var running = false;


function startTimer() {
  
    startTime = new Date().getTime();
    timerInterval = setInterval(showTime, 10);
  
    paused = false;
    running = true;
}

function pauseTimer() {
    if (!paused && running) {
      clearInterval(timerInterval);
      
      savedTime = difference;
      paused = true;
      running = false;
    } else if (paused && !running) {
      startTimer();
    } else {
      return;
    }
}

function stopTimer () {
    if (running) {
      clearInterval(timerInterval);
      
      running = false;
      paused = false;
      difference = 0;
      startTime = 0;
    }
    else return;
}

function showTime() {
   
  updatedTime = new Date().getTime();
  
  if (savedTime) {
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference = (updatedTime - startTime);
  }

  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((difference % (1000 * 60)) / 10);
  milliseconds = milliseconds % 100;
  
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
  
  console.log(`${minutes} : ${seconds} : ${milliseconds}`);
};

startTimer();

// setTimeout(pauseTimer, 2000);
// setTimeout(pauseTimer, 3000);
setTimeout(stopTimer, 2000);
setTimeout(startTimer, 2001);
setTimeout(stopTimer, 7000);
