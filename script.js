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
function toggleProfessionalSummary() {
    var section = document.getElementById("professional-summary");
    var heading = document.getElementById("toggle-summary");

    // Toggle the 'show' class
    section.classList.toggle("show");

    // Change the arrow icon dynamically
    if (section.classList.contains("show")) {
        heading.innerHTML = "PROFESSIONAL SUMMARY ▲";
    } else {
        heading.innerHTML = "PROFESSIONAL SUMMARY ▼";
    }
}
