document.addEventListener("DOMContentLoaded", function () {

  const intro = document.getElementById("intro");
  const openBtn = document.getElementById("openBtn");

  if (openBtn && intro) {
    openBtn.onclick = function () {
      intro.style.opacity = "0";
      intro.style.visibility = "hidden";
      intro.style.pointerEvents = "none";
    };
  }

});
