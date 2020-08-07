var timeEl = document.querySelector(".time");
var secondsLeft = 60;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " : (Timer) ";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
setTime();
