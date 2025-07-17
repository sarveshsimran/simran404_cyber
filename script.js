const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = function () {
  sidebar.style.left = "0";
  overlay.style.display = "block";
};

function closeSidebar() {
  sidebar.style.left = "-250px";
  overlay.style.display = "none";
}

function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach(sec => sec.style.display = "none");

  document.getElementById(sectionId).style.display = "block";
  closeSidebar();
}
