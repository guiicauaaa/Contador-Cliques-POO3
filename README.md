# Contador de Cliques Personalizado

Exercício de POO3: um contador com os botões Incrementar e Resetar, praticando variável global com `let`, funções ligadas aos eventos de clique e manipulação de texto.

## Como abrir

- **Online (GitHub Pages):** https://guiicauaaa.github.io/Contador-Cliques-POO3/
- **VS Code:** abra a pasta e use o Live Server ("Go Live") no `index.html`.
- **Sem servidor:** dois cliques no `index.html`.

## Como funciona

1. A contagem fica numa variável global: `let contagem = 0;`.
2. O `h1` começa em 0 e é selecionado uma vez só: `const titulo = document.querySelector("h1");`.
3. `incrementar()` soma 1 à contagem e atualiza o texto do `h1`.
4. `resetar()` volta a contagem para 0 e atualiza o `h1`.
5. Cada função está ligada ao clique do seu botão com `addEventListener("click", ...)`.

## Global x local (testado no navegador)

| Como a contagem foi declarada | O que acontece nos cliques |
|---|---|
| `let` fora da função (global) | Conta 1, 2, 3... e o Resetar volta para 0. É a versão do projeto. |
| `let` dentro de `incrementar` (local) | O `h1` mostra sempre 1: a variável nasce em 0 a cada clique. |
| `const` fora da função | O `h1` não sai do 0 e cada clique dá `TypeError: Assignment to constant variable.` |

## Destaque: `const` para o cabeçalho

Como o `h1` foi guardado numa `const` no começo do arquivo, as duas funções atualizam o texto pela mesma referência (`titulo.textContent = contagem`), sem selecionar o elemento de novo a cada clique. O `const` não impede mudar o texto do `h1`: o que não muda é a referência ao elemento.

## Arquivos

- `index.html`: o `h1` do contador e os dois botões.
- `css/estilo.css`: o visual da página.
- `js/contador.js`: a variável global, as duas funções e os eventos de clique.
