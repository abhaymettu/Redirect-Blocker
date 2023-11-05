document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('checkbox');
  
    // Load the current state of the extension
    chrome.storage.local.get('isEnabled', function (data) {
      checkbox.checked = data.isEnabled;
    });
  
    checkbox.addEventListener('change', function () {
      var currentState = checkbox.checked;
      chrome.storage.local.set({ 'isEnabled': currentState }, function () {
        // Send a message to the background script to update the state
        chrome.runtime.sendMessage({ isEnabled: currentState });
      });
    });
  });
  