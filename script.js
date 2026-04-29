let clicks = 0;
let musicStarted = false;

function handleClick(scene) {
  const bubble = document.getElementById("bubble");

  // Start music once
  if (!musicStarted) {
    document.getElementById("bgMusic").play();
    musicStarted = true;
  }

  bubble.classList.remove("hidden");

  if (scene === "pingpong") {
    bubble.style.top = "20%";
    bubble.style.left = "15%";
    bubble.innerText = "you think you're good? 😭";
    document.getElementById("pingSound").play();
  }

  if (scene === "uno") {
    bubble.style.top = "20%";
    bubble.style.left = "45%";
    bubble.innerText = "+4 again?? 😭";
    document.getElementById("cardSound").play();
  }

  if (scene === "car") {
    bubble.style.top = "20%";
    bubble.style.right = "15%";
    bubble.innerText = "this is OUR song 🎶";
  }

  if (scene === "karaoke") {
    bubble.style.bottom = "20%";
    bubble.style.left = "15%";
    bubble.innerText = "main character energy 🎤";
  }

  if (scene === "dinner") {
    bubble.style.bottom = "20%";
    bubble.style.left = "45%";
    bubble.innerText = "my favorite person ❤️";
  }

  clicks++;

  if (clicks >= 5) {
    setTimeout(() => {
      document.getElementById("finalPopup").classList.remove("hidden");
    }, 1000);
  }
}

function closeFinal() {
  document.getElementById("finalPopup").classList.add("hidden");
}
