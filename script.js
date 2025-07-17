document.getElementById('toggle-btn').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
});

function showContent(section) {
  const content = document.getElementById('content');
  let html = '';

  if (section === 'home') {
    html = `
      <h2>🏠 Home</h2>
      <p>Welcome to the SIMRAN 404 Cyber interface.</p>
    `;
  } else if (section === 'tools') {
    html = `
      <h2>🛠️ Tools</h2>
      <ul>
        <li>IP Lookup</li>
        <li>Port Scanner</li>
        <li>Username Finder</li>
        <li>Phone Info Tracker</li>
      </ul>
    `;
  } else if (section === 'about') {
    html = `
      <h2>👤 About Me</h2>
      <p>Developer: Sarvesh Bharti<br>
         Ethical Hacker | Cyber Warrior<br>
         From: Dariyapur, Azamgarh (UP)<br>
         GitHub: <a href="https://github.com/sarveshsimran" target="_blank">sarveshsimran</a></p>
    `;
  } else if (section === 'contact') {
    html = `
      <h2>📬 Contact</h2>
      <p>Email: sarveshjatav738@gmail.com<br>
         Instagram: @sarveshbharti2025<br>
         WhatsApp: <a href="https://whatsapp.com/channel/0029VaQJJUfD38CVK2WoPI3M" target="_blank">Join Channel</a></p>
    `;
  }

  content.innerHTML = html;
  document.getElementById('sidebar').classList.remove('active'); // close after selection (mobile-friendly)
}
