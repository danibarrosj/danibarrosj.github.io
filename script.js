function toggleWorkExperience() {
    var section = document.querySelector(".summary-box");
    var heading = document.getElementById("work-experience");

    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        heading.innerHTML = "WORK EXPERIENCE ▲";
    } else {
        section.style.display = "none";
        heading.innerHTML = "WORK EXPERIENCE ▼";
    }
}