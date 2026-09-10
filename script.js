// ==============================
// DARK MODE
// ==============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});


// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}


// ==============================
// CONTACT FORM
// ==============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {

        alert(
            "Thank you, " + name +
            "! Your message has been received."
        );

        contactForm.reset();

    } else {

        alert("Please fill in all fields.");

    }

});


// ==============================
// PROJECT BUTTON
// ==============================

function showProject(projectName) {

    alert(
        "Project: " + projectName +
        "\n\nProject details can be added here."
    );

}


// ==============================
// CURRENT YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// NAVIGATION ACTIVE LINK
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
