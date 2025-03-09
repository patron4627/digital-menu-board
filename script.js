document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      alert(`Du hast "${item.querySelector('h3').textContent}" ausgewählt!`);
    });
  });
});
