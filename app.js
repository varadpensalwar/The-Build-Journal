document.addEventListener("DOMContentLoaded", () => {
  const bookElement = document.getElementById("book");

  // Page flip sound
  const flipSound = new Audio("sounds/page-flip.mp3");
  flipSound.preload = "auto";

  const pageFlip = new St.PageFlip(bookElement, {
    width: 500,
    height: 650,
    minWidth: 280,
    maxWidth: 700,
    minHeight: 420,
    maxHeight: 900,
    size: "stretch",
    maxShadowOpacity: 0.5,
    showCover: true,
    mobileScrollSupport: true,
    usePortrait: true,
    autoSize: true,
    startPage: 0,
  });

  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  // Play sound whenever page flips
  pageFlip.on("flip", () => {
    flipSound.pause();
    flipSound.currentTime = 0;
    flipSound.play().catch(() => {});
  });

  // Next button
  document.getElementById("next").addEventListener("click", () => {
    pageFlip.flipNext();
  });

  // Previous button
  document.getElementById("prev").addEventListener("click", () => {
    pageFlip.flipPrev();
  });

  // Keyboard arrows
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      pageFlip.flipNext();
    }

    if (event.key === "ArrowLeft") {
      pageFlip.flipPrev();
    }
  });
});
