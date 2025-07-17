let sidebarVisible = false;

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebarVisible) {
    sidebar.style.left = "0";
    sidebarVisible = true;
  } else {
    sidebar.style.left = "-220px";
    sidebarVisible = false;
  }
}

function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  toggleSidebar(); // Auto-close sidebar on mobile after click
}
