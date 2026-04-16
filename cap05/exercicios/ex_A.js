const prompt = require("prompt-sync")();
const fruta = prompt("Qual a Fruta? ");
const qnt = Number(prompt("Quantas repetições? "));

let resultado = "";

for (let i = 1; i <= qnt; i++) {
	resultado += fruta.toUpperCase();

	if (i < qnt) {
		resultado += " - ";
	}
}

console.log(resultado);
