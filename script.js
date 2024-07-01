// Script para validação básica do formulário de contato
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simples validação de preenchimento
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Mensagem enviada com sucesso!');
        form.reset(); // Limpa o formulário após o envio
    }
});
