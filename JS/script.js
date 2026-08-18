// Gerenciamento do botão de alternância de tema claro/escuro

const temaBtn = document.getElementById("temaBtn");

console.log(temaBtn);
if (temaBtn) {
    temaBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            temaBtn.textContent = "☀️ Tema Claro";
        } else {
            temaBtn.textContent = "🌙 Tema Escuro";
        }
    });
}

// Validação do formulário de contato e simulação de envio

const formulario = document.getElementById("formContato");

if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nome === "" || email === "" || mensagem === "") {
            alert("Preencha todos os campos.");
            return;
        }

        if (!emailValido.test(email)) {
            alert("Digite um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        formulario.reset();
    });
}