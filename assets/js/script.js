// assets/js/script.js

// 1. Fechar o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('menu-toggle');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Desmarca o checkbox, fechando o menu
        if (menuToggle.checked) {
             menuToggle.checked = false;
        }
    });
});

// 2. Adicionar/Remover classe 'menu-open' no body para evitar scroll de fundo em mobile
menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        document.body.classList.add('menu-open');
    } else {
        document.body.classList.remove('menu-open');
    }
});