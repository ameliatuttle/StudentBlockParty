function startCountdown() {
    const targetDate = new Date('September 20, 2024 19:00:00').getTime();
    const eventEndDate = new Date('September 20, 2024 21:00:00').getTime();

    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            // Countdown to 7:00 PM
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            document.getElementById("countdown").innerHTML =
                "COUNTDOWN: <span>" + days + "</span> Days <span>" + hours + "</span> Hours";
        } else if (now < eventEndDate) {
            // Event is happening between 7:00 PM and 9:00 PM
            clearInterval(countdownInterval); // Stop the previous interval
            document.getElementById("countdown").innerHTML = "The event is happening right now!";
            
            const eventInterval = setInterval(function () {
                if (new Date().getTime() >= eventEndDate) {
                    clearInterval(eventInterval);
                    document.getElementById("countdown").innerHTML = "The event has ended.";
                }
            }, 1000);
        } else {
            // Event has ended
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "The event has ended.";
        }
    }, 1000);
}

startCountdown();
