// Get references to the input and iframe elements
const videoInput = document.getElementById('videoInput');

function getYouTubeVideoCode(url) {
  // Use a regular expression to match the last part of the URL that isn't a query parameter
  const match = url.match(/(?:\/|v=|\/shorts\/)([a-zA-Z0-9_-]{11})(?:\?|$)/);
  return match ? match[1] : null;
}

// Add event listener for the Enter key
videoInput.addEventListener('keypress', function(event) {
  // Check if the pressed key is Enter
  if (event.key === 'Enter') {
    // Get the input value
    const textInput = videoInput.value.trim();
    const videoCode = getYouTubeVideoCode(textInput);
    if (videoCode) {
      // Update the URL without reloading the page
      //
      history.pushState(null, '', `${window.location.pathname}?videoCode=${videoCode}`);
      videoInput.value = '';
      loadVideo(videoCode)
    }
  }
});

function loadVideo(videoCode) {
  console.log(" starting Loading video with code:", videoCode);
  const videoIframe = document.querySelector('iframe');
  const newSrc = `https://www.youtube-nocookie.com/embed/${videoCode}?rel=0`;
  videoIframe.src = newSrc;
  console.log("Loading video with code:", videoCode);
}

// Example usage: When the page loads, check if a video code is present
function getVideoCodeFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("videoCode");
}

window.addEventListener("load", () => {
  const videoCode = getVideoCodeFromQuery();
  if (videoCode) {
    loadVideo(videoCode);
  }
});
