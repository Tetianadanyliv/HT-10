document.body.style.backgroundImage =
  "url('https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/concerts-amsterdam_0.jpg')";

const audioList = [0, 1, 2, 3, 4];

const sounds = {
  KeyA: 0,
  KeyS: 1,
  KeyD: 2,
  KeyF: 3,
  KeyG: 4,
};

let audio = null;
let playing = null;

function playSound(element) {
  audioList.forEach((a) => {
    audio = document.getElementsByTagName("audio")[a];
    audio.pause();
  });
  audio = document.getElementsByTagName("audio")[element];
  if (element === playing) {
    playing = null;
    audio && audio.pause();
  } else {
    playing = element;
    audio && audio.play();
  }
}

audioList.forEach((a) => {
  document.getElementsByClassName("key")[a].addEventListener("click", (e) => {
    playSound(a);
  });
});

document.addEventListener("keydown", (e) => {
  playSound(sounds[e.code]);
});
