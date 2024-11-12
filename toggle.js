const invertToggle = document.getElementById('invertToggle');
const videoFrame = document.getElementById('videoFrame');

// Toggle the 'invert-color' class on the iframe when checkbox is checked
invertToggle.addEventListener('change', () => {
  if (invertToggle.checked) {
    videoFrame.classList.add('invert-color');
  } else {
    videoFrame.classList.remove('invert-color');
  }
});
