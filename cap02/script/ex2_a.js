const fmr = document.querySelector("form");
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

fmr.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const medicamento = fmr.inMedicamento.value;
    const preco =  Number(fmr.inValor.value);
    
    const promocao = Math.floor(preco *2);
    
    resp1.innerText = `Promoção ${medicamento}`;
    resp2.innerText = `Compre 2 e pague R$ ${promocao.toFixed(2)};`
})