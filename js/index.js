// passo1 1
const botaoCarrossel = document.querySelectorAll ('.botao');
const imagens = document.querySelectorAll ('.imagem')
const informacoes = document.querySelectorAll ('.informacoes')

botaoCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{

        // passo 2
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        
        // passo 3
        botao.classList.add('selecionado');

        // passo 4
        const imagemAtiva = document.querySelector ('.ativa');
        imagemAtiva.classList.remove ('ativa');

        // passo 5
        imagens[indice].classList.add('ativa');

        // passo 6
        const informacoesAtiva = document.querySelector ('.informacoes.ativa');
        informacoesAtiva.classList.remove('ativa');

        // passo 7
        informacoes[indice].classList.add('ativa');
    })
})