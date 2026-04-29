let clicks = 0;
let musicStarted = false;

function typeWriter(text, element) {
  element.innerText = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerText += text.charAt(i);
      i++;
      setTimeout(typing, 30);
    }
  }
  typing();
}

function handleClick(scene) {
  const bubble = document.getElementById("bubble");

  if (!musicStarted) {
    document.getElementById("bgMusic").play();
    musicStarted = true;
  }

  bubble.classList.remove("hidden");

  if (scene === "pingpong") {
    bubble.style.top = "20%";
    bubble.style.left = "15%";
    typeWriter("you think you're good? 😭", bubble);
    document.getElementById("pingSound").play();
  }

  if (scene === "uno") {
    bubble.style.top = "20%";
    bubble.style.left = "45%";
    typeWriter("+4 again?? be serious 😭", bubble);
    document.getElementById("cardSound").play();
  }

  if (scene === "car") {
    bubble.style.top = "20%";
    bubble.style.right = "15%";
    typeWriter("this is OUR song 🎶", bubble);
  }

  if (scene === "karaoke") {
    bubble.style.bottom = "20%";
    bubble.style.left = "15%";
    typeWriter("main character energy 🎤", bubble);
  }

  if (scene === "dinner") {
    bubble.style.bottom = "20%";
    bubble.style.left = "45%";
    typeWriter("my favorite person ❤️", bubble);
  }

  clicks++;

  if (clicks >= 5) {
    setTimeout(() => {
      document.getElementById("finalPopup").classList.remove("hidden");
    }, 1200);
  }
}

function closeFinal() {
  document.getElementById("finalPopup").classList.add("hidden");
}
