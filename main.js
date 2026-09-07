/* ============================================
   MIRAMAR HOTEL & SPA — JavaScript
   ============================================ */

// Шапка при скролле
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Мобильное меню
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Форма → WhatsApp
// ВАЖНО: номер телефона меняйте здесь и в HTML (data-phone)
const WHATSAPP_NUMBER = '77474107478'; // без + и пробелов

function handleForm(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const room = form.room.value;
  const message = form.message.value.trim();

  let text = `Здравствуйте! Меня зовут ${name}.%0AТелефон: ${phone}`;
  if (room) text += `%0AИнтересует: ${room}`;
  if (message) text += `%0AПожелания: ${message}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  return false;
}
