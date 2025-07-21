

    
  // Section toggle
  function selectSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  // Dark/Light theme toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });

  // Default theme
  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('light');
  });
