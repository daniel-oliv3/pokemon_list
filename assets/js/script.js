/* Passo 1 - Pegar no JS o elemento HTML correspondente o botão de troca de tema */ 
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
// console.log(botaoAlterarTema);


/* Passo 2 - Dar um jeito de pegar no JS o elemento HTML correspondente ao body */
const body = document.querySelector("body");
// console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

/* Passo 3 - Dar um jeito de indentificar o clique do usuário no botão de troca de tema */
botaoAlterarTema.addEventListener("click", () => {
    // console.log("clicou no botão");

    /* Passo 6 - Verificar se o body ja classe do modo-escuro */
    // console.log(body.classList.contains("modo-escuro"));
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    // console.log(modoEscuroEstaAtivo);

    if(modoEscuroEstaAtivo){
        // console.log("modo escuro esta ativo");
        /* Passo 7 - Remover a classe do modo-escuro do body */
        body.classList.remove("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./assets/img/sun.png");
        /* Passo 8 - Trocar a imagem do botão de alterar tema para o sol */

    } else {
        /* Passo 4 - Adicionar a classe modo-escuro no body */
        // console.log(body.classList);
        body.classList.add("modo-escuro");

        /* Passo 5 - Trocar a imagem do botão de alterar tema para lua */
        imagemBotaoTrocaDeTema.setAttribute("src", "./assets/img/moon.png");
    }

    

    
});
























/*
alert("Olá Mundo!");


    O que precisamos fazer ? - quando clicarmos no botão de troca de tema temos que
    alterar  cor do tema da página para as cores do tema claro ou do tema escuro

    - Objetivo 1 - Quando clicar no botão de trocar de tema, adicionar a classe 
    modo-escuro no body para que os estilos do modo escuro sejam aplicados a imagem da lua
        - Passo 1 - Pegar no JS o elemento HTML correspondente o botão de troca de tema
        - Passo 2 - Dar um jeito de pegar no JS o elemento HTML correspondente ao body
        - Passo 3 - Dar um jeito de indentificar o clique do usuário no botão de troca de tema
        - Passo 4 - Adicionar a classe modo-escuro no body
        - Passo 5 - Trocar a imagem do botão de alterar tema para lua
    
    - Objetivo 2 - Quando clicar no botão de troca de tema, caso o body ja tenha a classe modo-escuro,
    remover a classe para mudar pro modo claro e mudar a imagem pro sol
        - Passo 6 - Verificar se o body ja classe do modo-escuro
        - Passo 7 - Remover a classe do modo-escuro do body
        - Passo 8 - Trocar a imagem do botão de alterar tema para o sol
*/







/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    16/05/2023
*/ 






