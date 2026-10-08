alert("SCRIPT WORKING");const weddingDate = new Date('2027-01-18T19:30:00+05:30').getTime();
const whatsappNumber = '919000000000';

document.getElementById('openBtn').addEventListener('click',()=>document.getElementById('intro').classList.add('hide'));

function tick(){
 const diff=Math.max(0,weddingDate-Date.now());
 const d=Math.floor(diff/86400000), h=Math.floor(diff/3600000)%24, m=Math.floor(diff/60000)%60, s=Math.floor(diff/1000)%60;
 document.getElementById('days').textContent=String(d).padStart(2,'0');
 document.getElementById('hours').textContent=String(h).padStart(2,'0');
 document.getElementById('minutes').textContent=String(m).padStart(2,'0');
 document.getElementById('seconds').textContent=String(s).padStart(2,'0');
}
tick();setInterval(tick,1000);

document.querySelectorAll('.map-link').forEach(a=>{
 a.addEventListener('click',e=>{
   e.preventDefault();
   const url=a.dataset.map;
   if(url) location.href=url;
   else alert('Add your Google Maps link in script.js or directly in this button.');
 });
});

const wa=document.getElementById('whatsapp');
wa.href=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I would love to RSVP for Ananya & Arjun's wedding on 18 January 2027.")}`;

document.getElementById('shareBtn').addEventListener('click',async()=>{
 const data={title:'Ananya & Arjun — Wedding Invitation',text:'You are invited to celebrate Ananya & Arjun.',url:location.href};
 if(navigator.share) await navigator.share(data);
 else {await navigator.clipboard?.writeText(location.href);alert('Invitation link copied!');}
});

document.getElementById('langBtn').addEventListener('click',e=>{
 const hindi=e.target.textContent==='हिंदी';
 e.target.textContent=hindi?'English':'हिंदी';
 document.body.style.fontFamily=hindi?"'Noto Serif Devanagari','DM Sans',sans-serif":"'DM Sans',sans-serif";
 if(hindi) alert('Hindi mode is ready for customization. Replace your text with Hindi in the HTML when preparing a client invitation.');
});

const music=document.getElementById('music'), musicBtn=document.getElementById('musicBtn');
musicBtn.addEventListener('click',async()=>{
 try{if(music.paused){await music.play();musicBtn.textContent='Ⅱ';}else{music.pause();musicBtn.textContent='♫';}}
 catch(e){alert('Add a music.mp3 file to this folder to enable music.');}
});
 false;
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
document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro");
  const openBtn = document.getElementById("openBtn");

  if (openBtn && intro) {
    openBtn.addEventListener("click", function () {
      intro.classList.add("hide");
      document.body.classList.remove("locked");
    });
  }
});
