

//1- Dar um jeito de pegar o  elemento HTML dos boões

const botoesCarrossel = document.querySelectorAll(".btn");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//2- Dar um jeito de identificar o clique do usuario do botão.
botoesCarrossel.forEach((btn, indice) => {
    btn.addEventListener("click", () => {
        // 3- desativar o botao selecionado
        DesativarBotaoSelecionado();

        btn.classList.add('selecionado');
        //  4- esconder imagm ativa   
        EconderImagemAtiva();

        // 5- adicionar imagens
        imagens[indice].classList.add('ativa');

        // 6- esconder informaçoes ativa
        EsconderInformacaoAtivaa();

        informacoes[indice].classList.add('ativa');

    });
});
// codigo refatorado
function EsconderInformacaoAtivaa() {
    const informacaoAtiva = document.querySelector('.informacoes.ativa');
    informacaoAtiva.classList.remove('ativa');
}

function EconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function DesativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
