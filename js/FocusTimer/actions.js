import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countdown();
  /* sounds.buttonPressAudio.play()*/
}

export function plusRunning() {
  if (state.minutes >= 60) {
    state.minutes = 60
    state.seconds = 0
    return;
  }
  state.minutes = state.minutes + 5;
  minutes.textContent = String(state.minutes).padStart(2, "0");
  seconds.textContent = String(state.seconds).padStart(2, "0");
}

export function minusRunning() {
  if (state.minutes <= 0 || state.minutes < 5) {
    state.minutes = 0
    return;
  }

  state.minutes = state.minutes - 5;
  minutes.textContent = String(state.minutes).padStart(2, "0");
}
