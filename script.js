document.addEventListener("DOMContentLoaded", function () {
  document.body.style.opacity = "1";

  function scaleText() {
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    const width = window.innerWidth;

    if (width < 768) {
      title.style.fontSize = "2rem";
      subtitle.style.fontSize = "1rem";
    } else {
      title.style.fontSize = "3.5rem";
      subtitle.style.fontSize = "1.5rem";
    }
  }

  window.addEventListener("resize", scaleText);
  scaleText(); 

  const cta = document.getElementById("cta");
  cta.addEventListener("mouseover", () => {
    cta.style.transform = "scale(1.05)";
    cta.style.boxShadow = "0 0 10px rgba(196, 127, 52, 0.7)";
    cta.style.backgroundColor = "#a7672d";
  });

  cta.addEventListener("mouseout", () => {
    cta.style.transform = "scale(1)";
    cta.style.boxShadow = "none";
    cta.style.backgroundColor = "#c47f34";
  });

  const steamElements = document.querySelectorAll(".steam");

  function randomizeSteam() {
    steamElements.forEach((steam) => {
      let randomX = (Math.random() - 0.5) * 10;
      let randomDuration = Math.random() * 2 + 2;
      steam.style.animationDuration = `${randomDuration}s`;
      steam.style.transform = `translateX(${randomX}px)`;
    });
  }

  setInterval(randomizeSteam, 2000);
});

  