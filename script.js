function toggleWorkExperience() {
    var section = document.getElementById("work-experience");
    var heading = document.querySelector(".toggle-heading");

    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        heading.innerHTML = "Work Experience ▲"; // Change arrow
    } else {
        section.style.display = "none";
        heading.innerHTML = "Work Experience ▼";
    }
}