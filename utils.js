
function getYouTubeVideoCode(url) {
  // Use a regular expression to match the last part of the URL that isn't a query parameter
  const match = url.match(/(?:\/|v=|\/shorts\/|[?&]v=)([a-zA-Z0-9_-]{11})(?:[?&]|$)/);
  return match ? match[1] : null;
}
;
