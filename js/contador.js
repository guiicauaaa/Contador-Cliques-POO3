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

// GLOBAL x LOCAL (testado no navegador)
// O que acontece se a contagem for declarada de outro jeito:
//
// 1) let declarada DENTRO da função incrementar (escopo local):
//        function incrementar() {
//            let contagem = 0;
//            contagem++;
//            titulo.textContent = contagem;
//        }
//    A variável é criada de novo com 0 a cada clique e deixa de existir quando a função termina.
//    O h1 mostra sempre 1, não importa quantas vezes o botão seja clicado.
//
// 2) const declarada fora da função:
//        const contagem = 0;
//    Cada clique, nos dois botões, dá "TypeError: Assignment to constant variable." no console
//    e o h1 fica parado em 0: uma const não pode receber outro valor, nem mesmo o 0 do resetar.
//
// Por isso a contagem é uma let GLOBAL: fica fora das funções, guarda o valor entre um clique
// e outro e pode ser alterada tanto pelo incrementar quanto pelo resetar.
//
// DESTAQUE DO const
// O h1 é selecionado uma vez, no começo do arquivo, e guardado em titulo.
// incrementar e resetar usam essa mesma referência (titulo.textContent = contagem),
// sem chamar o querySelector de novo a cada clique.
// O const não impede mudar o texto do h1: o que fica fixo é a referência ao elemento,
// não o conteúdo dele.
