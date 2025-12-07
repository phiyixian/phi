const softwareprojects = document.querySelector(".software_projects");
softwareprojects.classList.toggle("show");

const hardwareButton = document.getElementById("hardware");

hardwareButton.addEventListener('click', function() {
    const list = document.querySelector(".hardware_list");
    list.classList.toggle("show");
})

const softwareButton = document.getElementById("software");

softwareButton.addEventListener('click', function() {
    const list = document.querySelector(".software_list");
    list.classList.toggle("show");
})

const othersButton = document.getElementById("others");

othersButton.addEventListener('click', function() {
    const list = document.querySelector(".others_list");
    list.classList.toggle("show");
})

const hardwareProject = document.getElementById("project_hardware");

hardwareProject.addEventListener("click", function() {
    const hardwareprojects = document.querySelector(".hardware_projects");
    const softwareprojects = document.querySelector(".software_projects");
    hardwareprojects.classList.toggle("show");
    softwareprojects.classList.toggle("show");
})

const softwareProject = document.getElementById("project_software");

softwareProject.addEventListener("click", function() {
    const hardwareprojects = document.querySelector(".hardware_projects");
    const softwareprojects = document.querySelector(".software_projects");
    softwareprojects.classList.toggle("show");
    hardwareprojects.classList.toggle("show");
})

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".m").addEventListener("click", () => {
        console.log("clicked");
        document.getElementById("intro").scrollIntoView({
            behavior: "smooth"
        });
    });

    document.querySelector(".more_logo").addEventListener("click", () => {
        console.log("clicked");
        document.getElementById("intro").scrollIntoView({
            behavior: "smooth"
        });
    });
});