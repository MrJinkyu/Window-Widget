// 노래 틀기✅
// 노래 중지✅
// 볼륨조절✅
// 다음곡 넘기기✅
// 이전곡 넘기기✅
// 뛰어넘기✅ => eventListener input
// 원판 돌리기

const audioContext = new AudioContext();
const audio = document.querySelector("#music__audio")! as HTMLAudioElement;
const startBtn = document.querySelector(
  "#music__play-stop-btn"
)! as HTMLElement;
const musicVolumeInput = document.querySelector(
  "#music__volume-input"
)! as HTMLInputElement;
const musicCover = document.querySelector(".music__cover")! as HTMLDivElement;
const musicTitle = document.querySelector(".music__title")! as HTMLHeadElement;
const musicStartTime = document.querySelector(
  ".music__time-start"
)! as HTMLSpanElement;
const musicEndTime = document.querySelector(
  ".music__time-end"
)! as HTMLSpanElement;
const musicTimeInput = document.querySelector(
  "#music__time-input"
)! as HTMLInputElement;
const musicArr = [
  "Blizzards.mp3",
  "Calm.mp3",
  "Dusty_Road.mp3",
  "Escape.mp3",
  "Payday.mp3",
  "Retreat.mp3",
  "Seasonal.mp3",
  "Vespers.mp3",
];
const prevBtn = document.querySelector("#music__prev")! as HTMLElement;
const nextBtn = document.querySelector("#music__next")! as HTMLElement;
let intervailMusicTime: any;
function onMusicControll() {
  const isPlay = startBtn.className.includes("fa-play");
  if (isPlay) {
    onMusicStart();
  } else {
    onMusicStop();
  }
}
function onMusicStart() {
  onMusicVolume();
  startBtn.classList.remove("fa-play");
  startBtn.classList.add("fa-stop");
  audio.play();
  onStartInterval();
  musicCover.classList.add("active");
  changeVolumeIcon();
}

function onMusicStop() {
  startBtn.classList.remove("fa-stop");
  startBtn.classList.add("fa-play");
  audio.pause();
  onStopInterval();
  musicCover.classList.remove("active");
}

function onMusicVolume() {
  audio.volume = parseInt(musicVolumeInput.value) / 100;
  changeVolumeIcon();
}

function changeVolumeIcon() {
  const volumeRowIcon = document.querySelector(
    "#volume-row-icon"
  )! as HTMLElement;
  if (audio.volume == 0 && volumeRowIcon.className.includes("fa-volume-low")) {
    volumeRowIcon.classList.remove("fa-volume-low");
    volumeRowIcon.classList.add("fa-volume-xmark");
  } else {
    volumeRowIcon.classList.remove("fa-volume-xmark");
    volumeRowIcon.classList.add("fa-volume-low");
  }
}

function onPrevMusic() {
  let currentMusic = audio.src.split("music/")[1];
  const index = musicArr.indexOf(currentMusic);
  let prevIndex;
  if (index === 0) {
    prevIndex = musicArr.length - 1;
  } else {
    prevIndex = index - 1;
  }
  audio.src = `/music/${musicArr[prevIndex]}`;
  onChangeCover(String(prevIndex));
  onChangeTitle(musicArr[prevIndex].split(".")[0]);
  onMusicStart();
  musicCover.classList.remove("active");
  setTimeout(() => {
    musicCover.classList.add("active");
  }, 0);
}

function onNextMusic() {
  let currentMusic = audio.src.split("music/")[1];
  const index = musicArr.indexOf(currentMusic);
  let nextIndex;
  if (index === musicArr.length - 1) {
    nextIndex = 0;
  } else {
    nextIndex = index + 1;
  }
  audio.src = `/music/${musicArr[nextIndex]}`;
  onChangeCover(String(nextIndex));
  onChangeTitle(musicArr[nextIndex].split(".")[0]);
  onMusicStart();
  musicCover.classList.remove("active");
  setTimeout(() => {
    musicCover.classList.add("active");
  }, 0);
}

function onChangeCover(index: string) {
  const url = `url(/assets/member${index}.jpg) center/cover no-repeat`;
  musicCover.style.background = url;
}

function onChangeTitle(title: string) {
  musicTitle.textContent = title;
}

function onMusicTime() {
  const currentTime = audio.currentTime;
  const durationTime = audio.duration;
  const currentMinute = String(Math.floor(currentTime / 60));
  const currentSecond = String(Math.floor(currentTime % 60)).padStart(2, "0");
  const durationMinute = String(Math.floor(durationTime / 60));
  const durationSecond = String(Math.floor(durationTime % 60)).padStart(2, "0");

  musicStartTime.textContent = `${currentMinute}:${currentSecond}`;
  musicEndTime.textContent = `${durationMinute}:${durationSecond}`;
  musicTimeInput.min = String(audio.currentTime);
  musicTimeInput.max = String(audio.duration);
}

function onChangeMusicTimeInput() {
  audio.currentTime = parseInt(musicTimeInput.value);
}

function onCurrentCheckTime() {
  const currentTime = audio.currentTime;
  const currentMinute = String(Math.floor(currentTime / 60));
  const currentSecond = String(Math.floor(currentTime % 60)).padStart(2, "0");
  musicStartTime.textContent = `${currentMinute}:${currentSecond}`;
  if (audio.duration === audio.currentTime) {
    onNextMusic();
  }
}

function onStartInterval() {
  intervailMusicTime = setInterval(() => {
    onCurrentCheckTime();
    musicTimeInput.value = String(audio.currentTime);
  }, 500);
}

function onStopInterval() {
  clearInterval(intervailMusicTime);
}

startBtn.addEventListener("click", onMusicControll);
musicVolumeInput.addEventListener("input", onMusicVolume);
prevBtn.addEventListener("click", onPrevMusic);
nextBtn.addEventListener("click", onNextMusic);
audio.addEventListener("loadedmetadata", onMusicTime);
musicTimeInput.addEventListener("input", onChangeMusicTimeInput);
