//O valor digitado pelo usuário será diminuído até 1

const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)

    let resposta = `Entre ${num} e 1: `
    for (let i = num; i > 0; i = i - 1){
        resposta = `${resposta}${i} ,`
    }
    resp.innerText = resposta

})