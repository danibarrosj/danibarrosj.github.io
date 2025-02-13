function toggleWorkExperience() {
    var section = document.getElementById("work-experience");
    var heading = document.getElementById("toggle-work");

    // Toggle the 'show' class
    section.classList.toggle("show");

    // Change the arrow icon dynamically
    if (section.classList.contains("show")) {
        heading.innerHTML = "WORK EXPERIENCE ▲";
    } else {
        heading.innerHTML = "WORK EXPERIENCE ▼";
    }
}
