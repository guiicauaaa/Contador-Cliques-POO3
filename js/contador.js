// VARIÁVEL GLOBAL: guarda a contagem entre um clique e outro
let contagem = 0;

// ELEMENTOS DA TELA
// const: o h1 é selecionado uma vez só e usado nas duas funções, sem precisar buscar de novo
const titulo = document.querySelector("h1");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnResetar = document.getElementById("btnResetar");

// SOMAR 1 AO VALOR E ATUALIZAR O H1
function incrementar() {
    contagem++;
    titulo.textContent = contagem;
}

// ZERAR O VALOR E ATUALIZAR O H1
function resetar() {
    contagem = 0;
    titulo.textContent = contagem;
}

// EVENTOS DE CLIQUE
btnIncrementar.addEventListener("click", incrementar);
btnResetar.addEventListener("click", resetar);
