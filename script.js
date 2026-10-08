document.addEventListener("DOMContentLoaded", function () {

  /* OPEN INVITATION */
  const openBtn = document.getElementById("openBtn");
  const intro = document.getElementById("intro");

  if (openBtn && intro) {
    openBtn.addEventListener("click", function () {
      intro.classList.add("closed");
      document.body.classList.remove("no-scroll");
    });
  }


  /* BACK TO TOP */
  const topBtn = document.getElementById("topBtn");

  if (topBtn) {
    topBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }


  /* SHARE INVITATION */
  const shareBtn = document.getElementById("shareBtn");

  if (shareBtn) {
    shareBtn.addEventListener("click", async function () {

      const shareData = {
        title: "Ananya & Arjun | Wedding Invitation",
        text: "You are warmly invited to celebrate the wedding of Ananya & Arjun.",
        url: window.location.href
      };

      try {

        if (navigator.share) {
          await navigator.share(shareData);
        } else {

          await navigator.clipboard.writeText(window.location.href);

          alert("Invitation link copied!");

        }

      } catch (error) {
        console.log("Share cancelled");
      }

    });
  }


  /* COUNTDOWN */
  const weddingDate = new Date(
    "November 24, 2026 19:00:00"
  ).getTime();


  function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;

    if (difference <= 0) {

      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";

      return;
    }


    const days = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
      String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
      String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
      String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
      String(seconds).padStart(2, "0");

  }


  updateCountdown();

  setInterval(updateCountdown, 1000);

});
