let clickedScenes = {
  pingpong: false,
  uno: false,
  car: false,
  karaoke: false,
  dinner: false
};

let messageParts = {
  pingpong: "I love how we can turn anything into fun 🏓",
  uno: "Even when we argue over UNO and I ALWAYS win😭",
  car: "Every car ride with you feels like our own concert even though you say you sing better than me 🎶",
  karaoke: "You make me feel like the only person in the room 🎤",
  dinner: "And every moment with you feels like home and euphoria❤️"
};

let musicStarted = false;

function handleClick(scene) {
  const bubble = document.getElementById("bubble");

  // start music once
  if (!musicStarted) {
    document.getElementById("bgMusic").play();
    musicStarted = true;
  }

  // show bubble
  bubble.classList.remove("hidden");

  // position + sound
  if (scene === "pingpong") {
    bubble.style.top = "20%";
    bubble.style.left = "15%";
    document.getElementById("pingSound").play();
  }

  if (scene === "uno") {
    bubble.style.top = "20%";
    bubble.style.left = "45%";
    document.getElementById("cardSound").play();
  }

  if (scene === "car") {
    bubble.style.top = "20%";
    bubble.style.right = "15%";
  }

  if (scene === "karaoke") {
    bubble.style.bottom = "20%";
    bubble.style.left = "15%";
  }

  if (scene === "dinner") {
    bubble.style.bottom = "20%";
    bubble.style.left = "45%";
  }

  // show message
  bubble.innerText = messageParts[scene];

  // mark clicked
  clickedScenes[scene] = true;

  // hide bubble after delay
  setTimeout(() => {
    bubble.classList.add("hidden");
  }, 2500);

  // check if all clicked
  if (
    clickedScenes.pingpong &&
    clickedScenes.uno &&
    clickedScenes.car &&
    clickedScenes.karaoke &&
    clickedScenes.dinner
  ) {
    setTimeout(() => {
      showFinalMessage();
    }, 1200);
  }
}

function showFinalMessage() {
  const popup = document.getElementById("finalPopup");

  popup.innerHTML = `
    <div class="popup-box">
      <h2>💌</h2>
      <p><strong>I love you ❤️</strong></p>
      <p>I love how we can turn anything into fun 🏓</p>
      <p>Even when we argue over UNO 😭</p>
      <p>Every car ride with you feels like our own concert 🎶</p>
      <p>You make me feel like the main character 🎤</p>
      <p>And every moment with you feels like home ❤️</p>
      <button onclick="closeFinal()">forever & always 💕</button>
    </div>
  `;

  popup.classList.remove("hidden");
}

function closeFinal() {
  document.getElementById("finalPopup").classList.remove("hidden");
}
