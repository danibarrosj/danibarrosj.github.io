document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      title: "URL SHORTENER WEB APP",
      tech: "Python, Flask, HTML, CSS, API",
      desc: "Built a web application that converts long URLs into short, unique links using Flask. Implemented routing to handle redirections, form validation, and a simple mapping system to store and retrieve original URLs."
    },
    {
      title: "STUDENT MANAGEMENT SYSTEM",
      tech: "C++, OOP, FILE HANDLING",
      desc: "Created a console-based system to manage student records using object-oriented programming. Features include adding, editing, displaying, and saving student data to files."
    },
    {
      title: "WEATHER DASHBOARD",
      tech: "HTML, CSS, JavaScript, API",
      desc: "Developing an interactive weather dashboard that allows users to search cities and view current weather and forecasts using OpenWeatherMap API."
    },
    {
      title: "GITHUB REPOSITORIES",
      tech: "HTML, CSS, JavaScript, C++, JAVA",
      desc: "Over 20 small personal and school projects demonstrating proficiency in various technical languages."
    }
  ];

  let currentProject = 0;

  const title = document.getElementById("project-title");
  const tech = document.getElementById("project-tech");
  const desc = document.getElementById("project-desc");

  function showProject(index) {
    const proj = projects[index];
    title.textContent = proj.title;
    tech.innerHTML = `<i>${proj.tech}</i>`;
    desc.textContent = proj.desc;
  }

  function changeSlide(direction) {
    currentProject = (currentProject + direction + projects.length) % projects.length;
    showProject(currentProject);
  }

  document.getElementById("prev").addEventListener("click", () => changeSlide(-1));
  document.getElementById("next").addEventListener("click", () => changeSlide(1));

  showProject(currentProject); // initial display
});

const photos = [
  'doraemon.jpg',
  'cat3.jpg',
  'cat4.jpg',
  'cat5.webp',
  'cat6.webp'
];

let index = 0;
const img = document.getElementById('slideshow-photo');

setInterval(() => {
  index = (index + 1) % photos.length;
  img.src = photos[index];
}, 4000);


document.getElementById("contact-btn").addEventListener("click", function () {
  const phoneNumber = "+12035269394";

  // Check if it's a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Directly initiate call
    window.location.href = `tel:${phoneNumber}`;
  } else {
    // Show a popup with phone number
    alert(`You can reach me at: ${phoneNumber}`);
  }
});

window.addEventListener('scroll', function () {
  const nav = document.querySelector('.main-nav');
  if (window.scrollY > 50) {
    nav.classList.add('shrink');
  } else {
    nav.classList.remove('shrink');
  }
});

document.getElementById("courses-toggle").addEventListener("click", function () {
  const dropdown = document.getElementById("courses-dropdown");
  const isOpen = dropdown.style.display === "block";

  dropdown.style.display = isOpen ? "none" : "block";
  this.textContent = isOpen ? "▶ Relevant Courses" : "▼ Relevant Courses";
});
