// Birthday date
const birthday = new Date("March 17, 2026 00:00:00").getTime();

// Countdown
const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<h2>🎉 Happy Birthday! 🎉</h2>";
        startFireworks();
        playMusic();
    }
}, 1000);

// Fireworks function
function startFireworks() {
    const fireworks = document.getElementById("fireworks");
    for (let i=0; i<50; i++) {
        const fire = document.createElement("div");
        fire.classList.add("heart");
        fire.style.left = Math.random()*100 + "vw";
        fire.style.fontSize = (10 + Math.random()*30) + "px";
        fire.innerText = "❤️";
        fireworks.appendChild(fire);
    }
}

// Play romantic music
function playMusic() {
    const music = document.getElementById("music");
    music.play();
}