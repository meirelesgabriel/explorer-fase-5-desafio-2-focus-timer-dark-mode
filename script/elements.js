const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const turnUpButton = document.querySelector('.turn-up')
const turnDownButton = document.querySelector('.turn-down')
const forestSoundButton = document.querySelector('.forest-sound')
const rainSoundButton = document.querySelector('.rain-sound')
const cafeSoundButton = document.querySelector('.cafe-sound')
const firePlaceSoundButton = document.querySelector('.fireplace-sound')

const lightModeButton = document.querySelector('.light-mode-button')
const darkModeButton = document.querySelector('.dark-mode-button')

const bodyPage = document.body
const time = document.querySelector('.time')
const controlButtons = document.querySelector('.controls')
const soundButtons = document.querySelector('.sounds')

const forestVolumeControl = document.getElementById("volume-control-forest-sound");
const rainVolumeControl = document.getElementById("volume-control-rain-sound");
const cafeVolumeControl = document.getElementById("volume-control-cafe-sound");
const firePlaceVolumeControl = document.getElementById("volume-control-fireplace-sound");


const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

export const elements = {
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
}