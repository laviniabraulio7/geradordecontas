const campoSenha = document.getElementById("senha");
const campoTamanho = document.getElementById("tamanho");
const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const especiais = document.getElementById("especiais");
const botaoGerar = document.getElementById("gerar");
const botaoLimpar = document.getElementById("limpar");
const mensagem = document.getElementById("mensagem");

function gerarSenha() {
    const tamanho = Number(campoTamanho.value);
    let caracteres = "";

    if (maiusculas.checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (minusculas.checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numeros.checked) {
        caracteres += "0123456789";
    }

    if (especiais.checked) {
        caracteres += "!@#$%&*?";
    }

    if (caracteres.length === 0) {
        mensagem.textContent = "Selecione pelo menos uma opção!";
        campoSenha.value = "";
        return;
    }

    if (tamanho < 1 || tamanho > 50 || !Number.isInteger(tamanho)) {
        mensagem.textContent = "Escolha um tamanho entre 1 e 50!";
        campoSenha.value = "";
        return;
    }

    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    campoSenha.value = senha;
    mensagem.textContent = "Senha gerada com sucesso!";
}

function limparSenha() {
    campoSenha.value = "";
    mensagem.textContent = "";
}

botaoGerar.addEventListener("click", gerarSenha);
botaoLimpar.addEventListener("click", limparSenha);