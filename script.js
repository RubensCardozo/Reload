// Set the target date and time
const targetDate = new Date('January 1, 2025 00:00:00').getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    const countdownElement = document.getElementById('countdown');
    if (timeRemaining > 0) {
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        // When the countdown ends
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Reload is here!";
        document.getElementById('link').style.display = 'block';
    }
}, 1000);
