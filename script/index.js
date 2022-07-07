import resetControls from "./controls.js";
import { Timer } from "./timer.js"
import { elements } from "./elements.js"
import Sound from './sounds.js'

const {
  playButton,
  pauseButton,
  stopButton,
  turnUpButton,
  turnDownButton,
  forestSoundButton,
  rainSoundButton,
  cafeSoundButton,
  firePlaceSoundButton,
  lightModeButton,
  darkModeButton,
  bodyPage,
  time,
  controlButtons,
  soundButtons,
  forestVolumeControl,
  rainVolumeControl,
  cafeVolumeControl,
  firePlaceVolumeControl,
  minutesDisplay,
  secondsDisplay
} = elements

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)


const timer = Timer({
  playButton,
  pauseButton,
  minutesDisplay,
  secondsDisplay,
})

const sound = Sound()


playButton.addEventListener('click', function() {
  if(minutesDisplay.textContent == '00' & secondsDisplay.textContent == '00') {
    return;
  } else {
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
    timer.countDown()
    
  }
})

pauseButton.addEventListener('click', function () {
  // reset controls:
  resetControls(playButton, pauseButton)
  // reset timer:
  timer.reset()
})

stopButton.addEventListener('click', function () {
  // reset controls:
  resetControls(playButton, pauseButton)
  // reset timer:
  timer.reset()
  // set timer:
  timer.updateDisplay(minutes, seconds)
})

turnUpButton.addEventListener('click', function () {
  // set timer
  timer.updateDisplay(Number(minutesDisplay.textContent) + 5, secondsDisplay.textContent)
})

turnDownButton.addEventListener('click', function () {
  // set timer:
  timer.updateDisplay(Number(minutesDisplay.textContent) - 5, secondsDisplay.textContent)

  if (minutesDisplay.textContent <= 0) {
    timer.updateDisplay(0, 0)
  }
})

forestSoundButton.addEventListener('click', function() {
  console.log('entrou no botão da floresta')
  if(sound.forestSound.paused) {
    sound.forestSound.play()
    sound.rainSound.pause()
    sound.coffeShopSound.pause()
    sound.firePlaceSound.pause()
  } else {
    sound.forestSound.pause()
  }
})

rainSoundButton.addEventListener('click', function() {
  console.log('entrou no botão da chuva')
  if(sound.rainSound.paused) {
    sound.rainSound.play()
    sound.forestSound.pause()
    sound.coffeShopSound.pause()
    sound.firePlaceSound.pause()
  } else {
    sound.rainSound.pause()
  }
})

cafeSoundButton.addEventListener('click', function() {
  console.log('entrou no botão da cafeteria')
  if(sound.coffeShopSound.paused) {
    sound.coffeShopSound.play()
    sound.forestSound.pause()
    sound.rainSound.pause()
    sound.firePlaceSound.pause()
  } else {
    sound.coffeShopSound.pause()
  }
})

firePlaceSoundButton.addEventListener('click', function() {
  console.log('entrou no botão da lareira')
  if(sound.firePlaceSound.paused) {
    sound.firePlaceSound.play()
    sound.forestSound.pause()
    sound.rainSound.pause()
    sound.coffeShopSound.pause()
  } else {
    sound.firePlaceSound.pause()
  }
  console.log(sound.forestSound.volume)
  console.log(forestVolumeControl.value)
})

lightModeButton.addEventListener('click', function() {
  lightModeButton.classList.add('hide')
  darkModeButton.classList.remove('hide')
  bodyPage.classList.add('dark-mode')
  time.classList.add('dark-mode')
  controlButtons.classList.add('dark-mode')
  soundButtons.classList.add('dark-mode')
})

darkModeButton.addEventListener('click', function() {
  lightModeButton.classList.remove('hide')
  darkModeButton.classList.add('hide')
  bodyPage.classList.remove('dark-mode')
  time.classList.remove('dark-mode')
  controlButtons.classList.remove('dark-mode')
  soundButtons.classList.remove('dark-mode')
})

forestVolumeControl.addEventListener("input", function() {
  console.log('sound.forestSound.volume: ', sound.forestSound.volume)
  console.log(('forestVolumeControl.value: fdfds', forestVolumeControl.value) / 100)
  sound.forestSound.volume = (forestVolumeControl.value / 100);
});
rainVolumeControl.addEventListener("input", function() {
  sound.rainSound.volume = rainVolumeControl.value / 100;
});
cafeVolumeControl.addEventListener("input", function() {
  sound.coffeShopSound.volume = cafeVolumeControl.value / 100;
});
firePlaceVolumeControl.addEventListener("input", function() {
  sound.firePlaceSound.volume = firePlaceVolumeControl.value / 100;
});