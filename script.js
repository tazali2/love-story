let currentScene = 0;

const scenes = [
  "pingpong",
  "uno",
  "car",
  "karaoke",
  "dinner"
];

const messages = {
  pingpong: "I love how we can turn anything into fun 🏓",
  uno: "Even when we argue over UNO 😭",
  car: "Every car ride with you feels like our own concert 🎶",
  karaoke: "You make me feel like the main character 🎤",
  dinner: "Every moment with you feels like home ❤️"
};

function updateImage() {
  const img = document.getElementById("sceneImage");

  // fade out
  img.classList.add("fade-out");

  setTimeout(() => {
    img.src = "assets/" + scenes[currentScene] + ".png";

    // fade in
    img.classList.remove("fade-out");
  }, 300);
}

function nextScene() {
  currentScene++;

  if (currentScene >= scenes.length) {
    currentScene = 0;
  }

  updateImage();
}

function showMessage() {
  const popup = document.getElementById("popup");
  const scene = scenes[currentScene];

  popup.innerText = messages[scene];

  popup.classList.remove("hidden");

  setTimeout(() => {
    popup.classList.add("show");
  }, 10);

  setTimeout(() => {
    popup.classList.remove("show");

    setTimeout(() => {
      popup.classList.add("hidden");
    }, 400);
  }, 2500);
}
