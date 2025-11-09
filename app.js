let naoPiscarBotao = 0;

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;
    let intervalo = ate - de + 1;

    if(intervalo < quantidade){
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }
    if (de >= ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate); 
        if(sorteados.includes(numero)){
            i--;
        } else {
            sorteados.push(numero);
        }
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    
    if(naoPiscarBotao == 0){
        alterarStatusDoBotao();
        naoPiscarBotao ++;
    }

}

function obterNumeroAleatorio(min, max){
    return parseInt(Math.random() * (max - min + 1) + min);
}

function alterarStatusDoBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    naoPiscarBotao = 0;
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusDoBotao();
}