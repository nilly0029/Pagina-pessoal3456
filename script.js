function openTab(tab) {
    document.querySelectorAll(".tab").forEach(el => el.classList.remove("active"));
    document.getElementById(tab).classList.add("active");
}

function toggleDesc(id) {
    const desc = document.getElementById(id);
    desc.style.display = desc.style.display === "block" ? "none" : "block";
}


