import * as audio from "./FocusTimer/audio.js";
import state from "./FocusTimer/state.js";

const buttonForest = document.querySelector(".toggle-forest");
const buttonRain = document.querySelector(".toggle-rain");
const buttonStore = document.querySelector(".toggle-store");
const buttonFire = document.querySelector(".toggle-fire");

buttonForest.addEventListener("click", () => {
  buttonForest.classList.toggle("on");
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    audio.ForestAudio.play();
    buttonRain.disabled = true;
    buttonStore.disabled = true;
    buttonFire.disabled = true;
    return;
  }
  audio.ForestAudio.pause();
  buttonRain.disabled = false;
  buttonStore.disabled = false;
  buttonFire.disabled = false;
});

buttonRain.addEventListener("click", () => {
  buttonRain.classList.toggle("on");
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    audio.RainAudio.play();
    buttonForest.disabled = true;
    buttonStore.disabled = true;
    buttonFire.disabled = true;
    return;
  }
  audio.RainAudio.pause();
  buttonForest.disabled = false;
  buttonStore.disabled = false;
  buttonFire.disabled = false;
});

buttonStore.addEventListener("click", () => {
  buttonStore.classList.toggle("on");
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    audio.StoreAudio.play();
    buttonForest.disabled = true;
    buttonRain.disabled = true;
    buttonFire.disabled = true;
    return;
  }
  audio.StoreAudio.pause();
  buttonForest.disabled = false;
  buttonRain.disabled = false;
  buttonFire.disabled = false;
});

buttonFire.addEventListener("click", () => {
  buttonFire.classList.toggle("on");
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    audio.FireAudio.play()
    buttonForest.disabled = true;
    buttonStore.disabled = true;
    buttonRain.disabled = true;
    return;
  }
  audio.FireAudio.pause();
  buttonForest.disabled = false;
  buttonRain.disabled = false;
  buttonStore.disabled = false;
});
