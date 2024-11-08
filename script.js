// Get references to the input and iframe elements
const videoInput = document.getElementById('videoInput');
const videoIframe = document.querySelector('iframe');

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

    const videoCode = getYouTubeVideoCode(textInput)
    // Construct the new source URL
    const newSrc = `https://www.youtube-nocookie.com/embed/${videoCode}?rel=0`;

    // Update the iframe src attribute
    videoIframe.src = newSrc;

    // Optional: Clear the input after updating
    videoInput.value = '';
  }
});

