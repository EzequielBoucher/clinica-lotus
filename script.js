const menu = document.querySelector('#menu')
const navegacao = document.getElementById("navegacao")

menu.addEventListener('click', ()=>{
    navegacao.classList.toggle('revelarNavegacao')
})

// Script para exibir/ocultar as respostas
document.addEventListener("DOMContentLoaded", function () {
    // Selecionando todos os itens da FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    // Adicionando o evento de clique em cada item
    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', function () {
            // Alterna a visibilidade da resposta
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            // Toggle da classe 'active' e exibição da resposta
            if (isActive) {
                answer.style.display = 'none';
                item.classList.remove('active');
            } else {
                answer.style.display = 'block';
                item.classList.add('active');
            }
        });
    });
});

// Selecionando os elementos
const formCadastro = document.getElementById('formCadastro');
const sucessoContainer = document.getElementById('sucesso');

// Função que será chamada quando o formulário for enviado
formCadastro.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para evitar o recarregamento da página

    // Exibe a mensagem de sucesso e esconde o formulário
    formCadastro.style.display = 'none'; // Oculta o formulário de cadastro
    sucessoContainer.style.display = 'block'; // Exibe a mensagem de sucesso
});


