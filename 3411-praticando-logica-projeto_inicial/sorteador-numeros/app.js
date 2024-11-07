 function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
      numero = obterNumeroAleatorio(de, ate);

      while (sorteados.includes(numero)) {
         numero = obterNumeroAleatorio(de,ate);
      }

      sorteados.push(numero);
      habilitarBotaoReiniciar()
    }

   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
 }

 function obterNumeroAleatorio(test, testt) {
   return Math.floor(Math.random() * (testt - test + 1)) + test;
 }

 function habilitarBotaoReiniciar() {
   let botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');
}

function reiniciar() {
   document.getElementById('quantidade').value = '';
   document.getElementById('de').value = '';
   document.getElementById('ate').value = '';
   document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;

   let botaoReiniciar = document.getElementById('btn-reiniciar');
   botaoReiniciar.classList.add('container__botao-desabilitado');
   botaoReiniciar.classList.remove('container__botao');
}