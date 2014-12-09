chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: "document.getElementById('comunidad').style.display='none'"
  });
});
