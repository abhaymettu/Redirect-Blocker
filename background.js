let isEnabled = true;

chrome.storage.local.get('isEnabled', function (data) {
  isEnabled = data.isEnabled !== undefined ? data.isEnabled : true; // default to true
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.hasOwnProperty('isEnabled')) {
    isEnabled = message.isEnabled;
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (isEnabled && changeInfo.url && changeInfo.url.includes(" ")) {
    chrome.tabs.remove(tabId);
  }
});
