const targetDate = new Date("2026-08-12T00:00:00");

function updateCountdown() {

    const now = new Date();

    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML =
            "🎉 Il viaggio è iniziato!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML =
        "Mancano <b>" + days + "</b> giorni alla partenza";
}

updateCountdown();

setInterval(updateCountdown,60000);
