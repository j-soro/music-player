const songsList = [
  "https://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3",
  "https://scummbar.com/mi2/MI1-CD/02%20-%20Chapter%20Screen.mp3",
  "https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3"
];

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const progressBar = document.querySelector(".progress");

let url = songsList[0];
let song = new Audio(url);
let currentSong = 0;

const prepareSong = () => {
  song.pause();
  url = songsList[currentSong];
  song = new Audio(url);
  setTimeout(() => progressBar.setAttribute("max", song.duration), 3000);
  song.addEventListener("timeUpdate", (ev) => onUpdateTimeSong(ev));
};

const playSong = () => {
  prepareSong();
  song.play().then(data => console.dir(data));
  updateSongData();
};

const pauseSong = () => {
  song.pause();
};

const prevSong = () => {
  if (currentSong > 0) { currentSong--; }
  playSong();
};

const nextSong = () => {
  if (currentSong < songsList.length - 1) { currentSong++; }
  playSong();
};

const updateSongData = () => {
  const songTitle = songsList[currentSong];
  const cleanSong = cleanName(songTitle);
  document.querySelector(".song-title").textContent = cleanSong;
  document.querySelector(".song-artist").textContent = "Monkey Island OST";
};

const cleanName = (url) => {
  const text = url.replace("https://scummbar.com/mi2/MI1-CD/", "")
    .replace(".mp3", "")
    .replaceAll("%20", " ");

  return text;
};

const onUpdateTimeSong = (ev) => {
  progressBar.setAttribute("value", ev.timeStamp);
};

playButton.addEventListener("click", () => playSong());
pauseButton.addEventListener("click", () => pauseSong());
prevButton.addEventListener("click", () => prevSong());
nextButton.addEventListener("click", () => nextSong());
