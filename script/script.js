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

function playSound(event) {
  audioList.forEach((a) => {
    audio = document.getElementsByTagName("audio")[a];
    audio.pause();
  });
  if (event.code in sounds) {
    audio = document.getElementsByTagName("audio")[sounds[event.code]];
    audio.play();
  }
}

audioList.forEach((a) => {
  document.getElementsByClassName("key")[a].addEventListener("click", (e) => {
    audioList.forEach((a) => {
      audio = document.getElementsByTagName("audio")[a];
      audio.pause();
    });
    audio = document.getElementsByTagName("audio")[a];
    audio.play();
  });
});

document.addEventListener("keydown", playSound);
