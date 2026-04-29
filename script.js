let clickedScenes = {
  pingpong: false,
  uno: false,
  car: false,
  karaoke: false,
  dinner: false
};

let musicStarted = false;

function handleClick(scene) {
  const bubble = document.getElementById("bubble");

  // Start music once
  if (!musicStarted) {
    document.getElementById("bgMusic").play();
    musicStarted = true;
  }

  // Show bubble
  bubble.classList.remove("hidden");

  if (scene === "pingpong") {
    bubble.style.top = "20%";
    bubble.style.left = "15%";
    bubble.innerText = "You think you're good? 😭";
    document.getElementById("pingSound").play();
  }

  if (scene === "uno") {
    bubble.style.top = "20%";
    bubble.style.left = "45%";
    bubble.innerText = "+4 again?? be serious 😭";
    document.getElementById("cardSound").play();
  }

  if (scene === "car") {
    bubble.style.top = "20%";
    bubble.style.right = "15%";
    bubble.innerText = "This is OUR song 🎶";
  }

  if (scene === "karaoke") {
    bubble.style.bottom = "20%";
    bubble.style.left = "15%";
    bubble.innerText = "Main character energy 🎤";
  }

  if (scene === "dinner") {
    bubble.style.bottom = "20%";
    bubble.style.left = "45%";
    bubble.innerText = "My favorite person ❤️";
  }

  // Mark this scene as clicked
  clickedScenes[scene] = true;

  // Check if ALL scenes clicked
  if (
    clickedScenes.pingpong &&
    clickedScenes.uno &&
    clickedScenes.car &&
    clickedScenes.karaoke &&
    clickedScenes.dinner
  ) {
    setTimeout(() => {
      document.getElementById("finalPopup").classList.remove("hidden");
    }, 1000);
  }
}
