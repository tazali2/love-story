let currentScene = 0;

const scenes = [
  "pingpong",
  "uno",
  "car",
  "karaoke",
  "dinner"
];

const messages = {
  pingpong: "I remember the first day we met like it was yesterday. I lowkey sold us in ping pong but HEY I'm slowly learning. I love that our first day together was something and don't worry I'll never forget the froyo and the wgft - you still give me the same butterflies that you gave me that day 🏓",
  uno: "Uno started to become our game, mainly because it's the one thing I can beat you at, and dont even say that you've beat me because when you did you had help from 4 PEOPLE. I love how frustrated you get when I win you always bring a smile to my face",
  car: "Every car ride with you feels like our own concert and adventure. I'll never forget the two hour car ride that we sang our hearts our and I genuinely think thats the day I realized I was falling head over heels for you. Our minds and hearts synced that day. That was the day I knew we'd get through anything together",
  karaoke: "You make me feel like the main character, that day in karaoke I felt like I had a spotlight on me and it was all from you. My heart was more and my smile never dropped",
  dinner: "Every moment with you feels like home, especially when we discover our daily food spots and the eats that we've never had before. I like that we're introducing new foods to each other. My favorite date was definitely din tai fung"
};

function updateImage() {
  const img = document.getElementById("sceneImage");

  // fade out
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = "assets/" + scenes[currentScene] + ".png";

    // fade in
    img.style.opacity = 1;
  }, 200);
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
  popup.classList.add("show");
}
document.addEventListener("click", function(e) {
  const popup = document.getElementById("popup");

  if (!e.target.closest("#popup") && !e.target.closest("button")) {
    popup.classList.remove("show");
    setTimeout(() => {
      popup.classList.add("hidden");
    }, 300);
  }
});
