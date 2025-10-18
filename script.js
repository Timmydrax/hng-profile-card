const timeElement = document.getElementById("time");

function updateTimer() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(4, "0");

  const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;

  timeElement.textContent = timeString;
}

setInterval(updateTimer, 1000);
