// background.js

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ skipIntro: true, skipNext: true });
});
