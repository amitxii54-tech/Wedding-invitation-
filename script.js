document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const openBtn = document.getElementById("openBtn");
  const topBtn = document.getElementById("topBtn");
  const shareBtn = document.getElementById("shareBtn");

  openBtn?.addEventListener("click", () => {
    intro?.classList.add("closed");
    document.body.classList.remove("no-scroll");
    setTimeout(() => intro?.remove(), 800);
  });

  topBtn?.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

  shareBtn?.addEventListener("click", async () => {
    const data = {title: "[BRIDE NAME] & [GROOM NAME] | Wedding Invitation",
      text: "You are invited to celebrate our special day."};
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Invitation link copied!");
      }
    } catch (e) {}
  });

  // Set the real wedding date in this line before delivery.
  const wedding = new Date("2099-01-01T00:00:00+05:30").getTime();
  const updateTimer = () => {
    const diff = Math.max(0, wedding - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor(diff / 3600000) % 24;
    const m = Math.floor(diff / 60000) % 60;
    const s = Math.floor(diff / 1000) % 60;
    document.getElementById("days").textContent = String(d).padStart(2,"0");
    document.getElementById("hours").textContent = String(h).padStart(2,"0");
    document.getElementById("minutes").textContent = String(m).padStart(2,"0");
    document.getElementById("seconds").textContent = String(s).padStart(2,"0");
  };
  updateTimer();
  setInterval(updateTimer, 1000);

  document.querySelectorAll('[data-placeholder]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      alert("Add the customer's real link before publishing.");
    });
  });
});
