const songsList = [
  "https://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3",
  "https://scummbar.com/mi2/MI1-CD/02%20-%20Chapter%20Screen.mp3",
  "https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3"
];

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");

const url = songsList[0];
const song = new Audio(url);

const playSong = () => {
  console.log("Reproduciendo...");
  song.play();
  updateSongData();
};

const pauseSong = () => {
  song.pause();
};

const updateSongData = () => {
  const songTitle = songsList[0];
  const cleanSong = cleanName(songTitle);
  document.querySelector(".song-title").textContent = cleanSong;
  const songArtist = "Monkey Island";
};

const cleanName = (url) => {
  const text = url.replace("https://scummbar.com/mi2/MI1-CD/", "")
    .replace(".mp3", "")
    .replaceAll("%20", " ");

  return text;
};

playButton.addEventListener("click", () => playSong());
pauseButton.addEventListener("click", () => pauseSong());
