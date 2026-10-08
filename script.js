/* ========================================
   BEGINNER CUSTOMIZATION AREA
   Change only the information in this object
   for a new customer.
   ======================================== */

const weddingData = {
  brideName: "Ananya Sharma",
  groomName: "Arjun Mehta",
  weddingDate: "2027-01-18",

  brideBio: "Grace, warmth and a beautiful smile — the heart of this celebration.",
  groomBio: "Kindness, laughter and a promise to build a beautiful life together.",

  storyTitle: "A little story of two hearts",
  storyText: "Somewhere between ordinary days and unexpected moments, Ananya and Arjun found a friendship that slowly became something more. Today, surrounded by the people they love, they begin their next chapter together.",

  brideFamily: "The Sharma Family",
  groomFamily: "The Mehta Family",

  venueName: "The Royal Courtyard",
  venueLocation: "Jaipur, Rajasthan",

  // Replace this with the real Google Maps link for the customer.
  mainMapsUrl: "",

  // Replace this with the customer's WhatsApp number, country code included.
  rsvpNumber: "+919000000000",

  events: [
    {
      icon: "🌼",
      title: "Haldi Ceremony",
      date: "17 January 2027",
      time: "11:00 AM",
      venue: "The Royal Courtyard",
      location: "Jaipur, Rajasthan",
      mapsUrl: ""
    },
    {
      icon: "💍",
      title: "Wedding Ceremony",
      date: "18 January 2027",
      time: "7:30 PM",
      venue: "The Royal Courtyard",
      location: "Jaipur, Rajasthan",
      mapsUrl: ""
    }
  ],

  gallery: [
    "assets/gallery1.svg",
    "assets/gallery2.svg",
    "assets/gallery3.svg",
    "assets/gallery4.svg",
    "assets/gallery5.svg",
    "assets/gallery6.svg",
    "assets/gallery7.svg",
    "assets/gallery8.svg"
  ]
};

/* ========================================
   DO NOT CHANGE BELOW THIS LINE
   unless you know JavaScript.
   ======================================== */

const $ = (id) => document.getElementById(id);

function formatDate(dateString) {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric"
  });
}

function populate() {
  const first = weddingData.brideName.split(" ")[0];
  const second = weddingData.groomName.split(" ")[0];
  const names = `${first} & ${second}`;

  $("introNames").textContent = names;
  $("introDate").textContent = formatDate(weddingData.weddingDate);
  $("brideHero").textContent = first;
  $("groomHero").textContent = second;
  $("heroDate").textContent = formatDate(weddingData.weddingDate);
  $("brideName").textContent = weddingData.brideName;
  $("groomName").textContent = weddingData.groomName;
  $("brideBio").textContent = weddingData.brideBio;
  $("groomBio").textContent = weddingData.groomBio;
  $("storyTitle").textContent = weddingData.storyTitle;
  $("storyText").textContent = weddingData.storyText;
  $("brideFamily").textContent = weddingData.brideFamily;
  $("groomFamily").textContent = weddingData.groomFamily;
  $("venueName").textContent = weddingData.venueName;
  $("venueLocation").textContent = weddingData.venueLocation;
  $("footerNames").textContent = names;

  const mapUrl = weddingData.mainMapsUrl || "#";
  $("mainMapButton").href = mapUrl;
  $("mainMapButton").onclick = (e) => {
    if (!weddingData.mainMapsUrl) {
      e.preventDefault();
      alert("Add the customer's Google Maps link in weddingData.mainMapsUrl.");
    }
  };

  const cleanNumber = weddingData.rsvpNumber.replace(/[^\d]/g, "");
  const message = encodeURIComponent(`Hello! I would like to confirm my presence at ${names}'s wedding.`);
  $("rsvpButton").href = `https://wa.me/${cleanNumber}?text=${message}`;
  $("callButton").href = `tel:+${cleanNumber}`;

  renderEvents();
  renderGallery();
}

function renderEvents() {
  const grid = $("eventsGrid");
  grid.innerHTML = "";
  weddingData.events.forEach(event => {
    const card = document.createElement("article");
    card.className = "event-card reveal";
    card.innerHTML = `
      <div class="event-icon">${event.icon || "✦"}</div>
      <h3>${event.title}</h3>
      <div class="event-meta">
        <strong>${event.date}</strong>
        ${event.time}<br>
        ${event.venue}<br>
        ${event.location}
      </div>
      <a class="btn outline event-map" href="${event.mapsUrl || "#"}" target="_blank" rel="noopener">View Location</a>
    `;
    const mapButton = card.querySelector(".event-map");
    mapButton.addEventListener("click", (e) => {
      if (!event.mapsUrl) {
        e.preventDefault();
        alert("Add this event's Google Maps link in the events section of weddingData.");
      }
    });
    grid.appendChild(card);
  });
}

function renderGallery() {
  const gallery = $("gallery");
  gallery.innerHTML = "";
  weddingData.gallery.forEach((src, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item reveal";
    item.innerHTML = `<img loading="lazy" src="${src}" alt="Wedding memory ${index + 1}">`;
    item.addEventListener("click", () => openLightbox(src));
    gallery.appendChild(item);
  });
}

function openLightbox(src) {
  $("lightboxImage").src = src;
  $("lightbox").classList.add("open");
  $("lightbox").setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  $("lightbox").classList.remove("open");
  $("lightbox").setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

const translations = {
  en: {
    youAreInvited:"You Are Invited", openInvitation:"Open Invitation", skip:"Skip",
    together:"Together with their families", inviteText:"invite you to celebrate their wedding",
    explore:"Explore Invitation ↓", theCouple:"The Couple", twoHearts:"Two hearts, one beautiful beginning",
    theBride:"The Bride", theGroom:"The Groom", countingDown:"Counting down to forever",
    bigDay:"The Big Day", days:"Days", hours:"Hours", minutes:"Minutes", seconds:"Seconds",
    celebrations:"The Celebrations", joinUs:"Join us for these beautiful moments",
    ourStory:"Our Story", memories:"Beautiful Memories", galleryTitle:"A glimpse into their story",
    blessings:"With the blessings of our families", brideFamily:"Bride's Family", groomFamily:"Groom's Family",
    venue:"The Venue", getDirections:"Get Directions", rsvp:"RSVP",
    presence:"Your presence would mean the world to us", confirmText:"Please let us know if you can join our celebration.",
    confirm:"Confirm Your Presence", contact:"Contact Us", share:"Share Invitation",
    footerText:"With love, laughter and happily ever after."
  },
  hi: {
    youAreInvited:"आप सादर आमंत्रित हैं", openInvitation:"निमंत्रण खोलें", skip:"छोड़ें",
    together:"परिवार सहित", inviteText:"आपको अपने विवाह समारोह में आमंत्रित करते हैं",
    explore:"निमंत्रण देखें ↓", theCouple:"वर-वधू", twoHearts:"दो दिल, एक खूबसूरत शुरुआत",
    theBride:"दुल्हन", theGroom:"दूल्हा", countingDown:"शुभ दिन की उलटी गिनती",
    bigDay:"शुभ विवाह", days:"दिन", hours:"घंटे", minutes:"मिनट", seconds:"सेकंड",
    celebrations:"समारोह", joinUs:"इन खूबसूरत पलों में हमारे साथ शामिल हों",
    ourStory:"हमारी कहानी", memories:"खूबसूरत यादें", galleryTitle:"उनकी कहानी की एक झलक",
    blessings:"परिवार के आशीर्वाद के साथ", brideFamily:"दुल्हन का परिवार", groomFamily:"दूल्हे का परिवार",
    venue:"स्थान", getDirections:"रास्ता देखें", rsvp:"उपस्थिति की पुष्टि",
    presence:"आपकी उपस्थिति हमारे लिए बहुत मायने रखती है", confirmText:"कृपया बताएं कि आप हमारे समारोह में शामिल हो सकेंगे या नहीं।",
    confirm:"उपस्थिति की पुष्टि करें", contact:"संपर्क करें", share:"निमंत्रण साझा करें",
    footerText:"प्रेम, खुशियों और नई शुरुआत के साथ।"
  }
};

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "hi" ? "hi" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  $("langToggle").textContent = lang === "en" ? "हिंदी" : "EN";
  document.body.style.fontFamily = lang === "hi"
    ? '"Noto Serif Devanagari","DM Sans",sans-serif'
    : '"DM Sans",sans-serif';
}

function startCountdown() {
  const target = new Date(weddingData.weddingDate + "T19:30:00").getTime();

  function update() {
    const diff = target - Date.now();
    if (diff <= 0) {
      $("countdown").innerHTML = `<div style="grid-column:1/-1;font-family:'Cormorant Garamond',serif;font-size:2rem">The Celebration Has Begun ❤️</div>`;
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff / 3600000) % 24);
    const m = Math.floor((diff / 60000) % 60);
    const s = Math.floor((diff / 1000) % 60);
    $("days").textContent = String(d).padStart(2,"0");
    $("hours").textContent = String(h).padStart(2,"0");
    $("minutes").textContent = String(m).padStart(2,"0");
    $("seconds").textContent = String(s).padStart(2,"0");
  }
  update();
  setInterval(update, 1000);
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function setupIntro() {
  const intro = $("intro");
  const close = () => {
    intro.classList.add("hidden");
    localStorage.setItem("weddingIntroSeen", "1");
  };
  $("openInvitation").addEventListener("click", close);
  $("skipIntro").addEventListener("click", close);
  // For demo/testing, always show the opening. Remove the next line if you want it
  // to be skipped automatically after the first visit.
}

function setupMusic() {
  const audio = $("weddingMusic");
  let playing = false;
  $("musicToggle").addEventListener("click", async () => {
    try {
      if (playing) {
        audio.pause();
        playing = false;
        $("musicToggle").textContent = "♪";
      } else {
        await audio.play();
        playing = true;
        $("musicToggle").textContent = "Ⅱ";
      }
    } catch {
      alert("Add an MP3 file at assets/wedding-music.mp3 first.");
    }
  });
}

function setupShare() {
  $("shareButton").addEventListener("click", async () => {
    const shareData = {
      title: `${weddingData.brideName} & ${weddingData.groomName} — Wedding Invitation`,
      text: `You are invited to ${weddingData.brideName} & ${weddingData.groomName}'s wedding.`,
      url: window.location.href
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch {}
    } else {
      const wa = `https://wa.me/?text=${encodeURIComponent(shareData.text + " " + shareData.url)}`;
      window.open(wa, "_blank", "noopener");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populate();
  startCountdown();
  setupReveal();
  setupIntro();
  setupMusic();
  setupShare();
  setLanguage("en");

  $("langToggle").addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "hi" : "en");
  });

  $("closeLightbox").addEventListener("click", closeLightbox);
  $("lightbox").addEventListener("click", e => {
    if (e.target === $("lightbox")) closeLightbox();
  });
});
