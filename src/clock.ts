const clock = document.querySelector("#clock")! as HTMLDivElement;

function getCurrentTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

getCurrentTime();
setInterval(getCurrentTime, 1000);
