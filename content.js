// Function to click the skip button by data-uia attribute
function clickButtonByDataUIA(dataUIA) {
  const button = document.querySelector(`[data-uia="${dataUIA}"]`);
  if (button) {
    button.click();
  }
}

const targetDataUIA = ["player-skip-intro", "next-episode-seamless-button"];

// Function to observe changes in the DOM
function observeDOM() {
  const observer = new MutationObserver(() => {
    targetDataUIA.forEach((dataUIA) => {
      clickButtonByDataUIA(dataUIA);
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Start observing the DOM
observeDOM();
