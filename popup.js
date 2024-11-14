// popup.js

document.addEventListener("DOMContentLoaded", () => {
  const skipIntroCheckbox = document.getElementById("skipIntro");
  const skipNextCheckbox = document.getElementById("skipNext");

  // Load saved preferences
  chrome.storage.sync.get(["skipIntro", "skipNext"], (data) => {
    skipIntroCheckbox.checked = data.skipIntro !== false;
    skipNextCheckbox.checked = data.skipNext !== false;
  });

  // Save preferences when changed
  skipIntroCheckbox.addEventListener("change", () => {
    chrome.storage.sync.set({ skipIntro: skipIntroCheckbox.checked });
  });

  skipNextCheckbox.addEventListener("change", () => {
    chrome.storage.sync.set({ skipNext: skipNextCheckbox.checked });
  });
});
