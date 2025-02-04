const fmr =  document.querySelector("form")
const resp = document.querySelector("#outResp")

fmr.addEventListener("submit", (e) =>{
    e.preventDefault();

    const valorBase = Number(fmr.inValor.value);
    const tempoUsado = Number(fmr.inTempo.value);
    //Math.ceil arredonda o valor quebrado para cima
    const valorConta = Math.ceil(tempoUsado/15) * valorBase;

    outResp.innerText = `Valor a se pagar ${valorConta.toFixed(2)}`;
})