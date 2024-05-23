document.getElementById('fetchTitleButton').addEventListener('click', function() {
  // Get the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // Get the title of the active tab
    let tabTitle = tabs[0].title;
    // Display the tab title in the popup
    document.getElementById('title').textContent = tabTitle;

    // Copy the title to the clipboard
    navigator.clipboard.writeText(tabTitle).then(function() {
      // Show a message confirming the copy
      document.getElementById('message').textContent = 'Title copied to clipboard!';
    }, function(err) {
      // If there is an error
      document.getElementById('message').textContent = 'Failed to copy title to clipboard.';
      console.error('Could not copy text: ', err);
    });
  });
});
