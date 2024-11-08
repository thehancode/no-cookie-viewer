// Get references to the input and iframe elements
const videoInput = document.getElementById('videoInput');
const videoIframe = document.querySelector('iframe');

// Add event listener for the Enter key
videoInput.addEventListener('keypress', function(event) {
  // Check if the pressed key is Enter
  if (event.key === 'Enter') {
    // Get the input value
    const videoId = videoInput.value.trim();

    // Construct the new source URL
    const newSrc = `https://www.youtube-nocookie.com/embed/${videoId}`;

    // Update the iframe src attribute
    videoIframe.src = newSrc;

    // Optional: Clear the input after updating
    videoInput.value = '';
  }
});
