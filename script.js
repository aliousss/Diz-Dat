function toggleAdminPanel() {
  document.getElementById('adminPanel').classList.toggle('hidden');
}

function openLoginModal() {
  document.getElementById('adminPanel').classList.add('hidden');
  document.getElementById('loginModal').classList.remove('hidden');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for contacting Diz&Dat!");
});
