const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

mainContent.addEventListener('click', () => {
  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  }
});
