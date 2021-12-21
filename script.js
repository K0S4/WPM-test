const regex = /\S+/g;
let timeLeft = 0;
let timerStarted = 0;
let length;

function setTimeValue() {
  time = document.getElementById("time").value;
  timeLeft = time;
  document.getElementById("text").disabled = false;
  document.getElementById("time").disabled = true;
}

function WordCount() {
  let words = document.getElementById("text").value.match(regex);
  length = words.length;
  if (timerStarted == 0) {
    timer();
    setInterval(timer, 1000);
    timerStarted++;
  }
  document.getElementById("words").innerHTML = "Words: " + length;
}

function redirectToResults() {
  const wpm = length / (time / 60);
  window.location.replace("results.html" + "?wpm=" + wpm);
}

// timer
function timer() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    redirectToResults();
  } else {
    document.getElementById("timer").innerHTML = "Time: " + timeLeft;
  }
  timeLeft--;
}
