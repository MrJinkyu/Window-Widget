{
  const clock = document.querySelector(".clock")! as HTMLHeadingElement;
  const dayInfo = document.querySelector(".day-info")! as HTMLHeadingElement;
  const smClock = document.querySelector(".sm-clock")! as HTMLParagraphElement;
  const smDayInfo = document.querySelector(
    ".sm-day-info"
  )! as HTMLParagraphElement;
  function getCurrentTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const month = String(date.getMonth() + 1);
    const dateDay = String(date.getDate());
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const day = days[date.getDay()];
    clock.textContent = `${hours}:${minutes}`;
    dayInfo.textContent = `${month}월 ${dateDay}일 ${day}요일`;
    smClock.textContent = `${hours}:${minutes}`;
    smDayInfo.textContent = `${month}월 ${dateDay}일 ${day}요일`;
  }

  getCurrentTime();
  setInterval(getCurrentTime, 1000);
}
