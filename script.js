// Troca entre abas
function openTab(tab) {
    const tabs = document.querySelectorAll(".tab");
    const buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach(t => t.classList.remove("active"));
    buttons.forEach(b => b.classList.remove("active"));

    setTimeout(() => {
        document.getElementById(tab).classList.add("active");
        event.target.classList.add("active");
    }, 50);
}

// Mostrar textos dos blocos
function toggleDesc(id) {
    const desc = document.getElementById(id);

    if (desc.style.display === "block") {
        desc.style.opacity = "0";
        setTimeout(() => desc.style.display = "none", 150);
    } else {
        desc.style.display = "block";
        desc.style.opacity = "1";
    }
}


