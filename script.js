document.addEventListener("DOMContentLoaded", function () {

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


    /* SHARE */

    const shareButton =
        document.getElementById("shareButton");


    if (shareButton) {

        shareButton.addEventListener(
            "click",
            async function () {

                const data = {
                    title:
                        "Ananya & Arjun — Wedding Invitation",

                    text:
                        "You are invited to celebrate the wedding of Ananya & Arjun.",

                    url:
                        window.location.href
                };


                try {

                    if (navigator.share) {

                        await navigator.share(data);

                    } else {

                        await navigator.clipboard.writeText(
                            window.location.href
                        );

                        alert(
                            "Invitation link copied!"
                        );
                    }

                } catch (error) {

                    console.log(
                        "Share cancelled."
                    );
                }

            }
        );

    }

});
