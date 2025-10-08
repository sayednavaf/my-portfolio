// Add interactive features here if needed
// Example: Smooth scroll for navigation (if you add nav)

const lines = [
    "Welcome to my portfolio!",
    "I am passionate about building beautiful web experiences.",
    "Explore my skills, projects, and contact info below."
];
const typingContainer = document.getElementById('typing-animation');
let lineIndex = 0;
let charIndex = 0;
function typeLine() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            typingContainer.innerHTML = lines[lineIndex].slice(0, charIndex + 1);
            charIndex++;
            setTimeout(typeLine, 60);
        } else {
            setTimeout(() => {
                charIndex = 0;
                lineIndex++;
                typingContainer.innerHTML += '<br>';
                setTimeout(typeLine, 500);
            }, 700);
        }
    }
}

const coursesText = "Completed a Python Programming course from KodNest, focusing on Python fundamentals and applications.";
const coursesTyping = document.getElementById('courses-typing');
let coursesCharIndex = 0;
function typeCoursesText() {
    if (coursesCharIndex < coursesText.length) {
        coursesTyping.innerHTML = coursesText.slice(0, coursesCharIndex + 1);
        coursesCharIndex++;
        setTimeout(typeCoursesText, 60);
    }
}

window.onload = function() {
    typeLine(); // Start header animation
    typeCoursesText(); // Start courses paragraph animation
};
