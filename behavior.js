
const storyText = document.querySelector(".story-text");
const storySignature = document.querySelector(".story-signature");
const storyButton = document.querySelector(".story-button");

function discoverStory() {
    storyText.textContent = "Maison Flora was born from my passion for flowers and the emotions they convey. I created this floral atelier to celebrate life's little moments through thoughtful, elegant bouquets.";

    storySignature.textContent = "— Boutaina, Founder";
}

storyButton.addEventListener("click", discoverStory);
