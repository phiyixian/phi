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


