document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("search-button").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: getSearchQuery
      });
    });
  });
});

function getSearchQuery() {
  const searchQuery = document.querySelector('input[name="q"]').value;
  if (searchQuery) {
    window.open(`https://legacy-of-the-dragonborn.fandom.com/wiki/Special:Search?query=${searchQuery}&scope=internal&navigationSearch=true`, "_blank");
  }
}
