let listaDeNumeroSorteados = []
let numeroMaximo = 10
let numeroSecreto = numeroAleatorio();
let tentativas = 1
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!!!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
        } else {
                if (chute > numeroSecreto) {
                    exibirTextoNaTela('p', 'o numero secreto é menor');
                } else {
                    exibirTextoNaTela('p', 'o numero secreto é maior');
                } tentativas++
        } limparCampo()
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeItens = listaDeNumeroSorteados.length

    if (quantidadeDeItens == numeroMaximo) {
        listaDeNumeroSorteados = []
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido)
        console.log(listaDeNumeroSorteados)
        return numeroEscolhido;
    }

}

mensagemInicial()

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um numero entre 1 a 10');  
}