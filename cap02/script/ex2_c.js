const fmr = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

fmr.addEventListener("submit", (e) => {
    e.preventDefault();

    const produto = fmr.inProduto.value;
    const preco = Number(fmr.inPreco.value);

    const terceiroProduto = preco/2;
    const total = (preco *2) + terceiroProduto;

    outResp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${total.toFixed(2)}`
    outResp2.innerText = `O 3º Produto custa apenas R$ ${terceiroProduto}`
})