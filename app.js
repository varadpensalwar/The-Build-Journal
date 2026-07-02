document.addEventListener("DOMContentLoaded", () => {
  const bookElement = document.getElementById("book");

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

  document.getElementById("next").addEventListener("click", () => {
    pageFlip.flipNext();
  });

  document.getElementById("prev").addEventListener("click", () => {
    pageFlip.flipPrev();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      pageFlip.flipNext();
    }

    if (event.key === "ArrowLeft") {
      pageFlip.flipPrev();
    }
  });
});
