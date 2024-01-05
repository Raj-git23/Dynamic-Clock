document.addEventListener("DOMContentLoaded", function () {
    var welcomePage = document.querySelector('.welcome-page');
    var mainContent = document.querySelector('.main-content');

    setTimeout(function() {
        welcomePage.style.opacity = '0';
        setTimeout(function() {
            welcomePage.style.display = 'none';
            mainContent.style.display = 'flex'; // Set display to flex
            setTimeout(function() {
                welcomePage.style.opacity = '0'; // Fade out the welcome page
                mainContent.style.opacity = '1'; // Fade in the main content
            }, 1000); // Adjust the delay for the main content fade-in after welcome page fades out
        }, 1000); // Hide the welcome page after the fade-out animation
    }, 2000);// Adjust the time for the welcome page to stay visible

    // Your other JavaScript code here
    // ...
});

var clock = setInterval(clocktime, 1000);

function clocktime() {
    var d = new Date();
    var d1 = d.toLocaleTimeString();
    document.getElementById('time-clock').innerHTML = d1;
}

var lines = [
    "Exploring distant galaxies",
    "Unraveling the fabric of time",
    "Harnessing the power of antimatter",
    "Journeying beyond the event horizon",
    "Merging man and machine",
    "Decrypting extraterrestrial signals",
    "In the vast expanse of space, time whispers the profound narrative of scientific revelation—",
    "a cosmic dance where every second etches the story of our existence into the fabric of the universe",
    "So always enjoy your time",
    "and HAPPY NEW YEAR 2024",
    "ENJOY GUYSSS... "
];

var lineIndex = 0;
var charIndex = 0;
var lineSlideshow = document.getElementById('lineSlideshow');

function updateLineSlideshow() {
    if (charIndex < lines[lineIndex].length) {
        lineSlideshow.textContent += lines[lineIndex].charAt(charIndex);
        charIndex++;
    } else {
        lineIndex = (lineIndex + 1) % lines.length; // Reset lineIndex to loop through lines
        charIndex = 0;
        lineSlideshow.textContent = '';
    }
}

var lineInterval = setInterval(updateLineSlideshow, 190);
