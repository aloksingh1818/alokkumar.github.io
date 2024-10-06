// Typing Effect
const typingText = "I’m Alok Kumar, passionate about data science, machine learning, and web development.";
let i = 0;
const speed = 50; // Speed of typing

function typeWriter() {
    if (i < typingText.length) {
        document.getElementById("typing").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
