// Obtem elementos da pagina
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Escuta o evento submit do form
frm.addEventListener("submit", (e) => {
	e.preventDefault();

	// obtém dados de entrada
	const chin = Number(frm.inChin.value);
	const anos = Number(frm.inAnos.value);

	// Cria variáveis do tipo string e irá concatenar com a resposta
	let resposta = "";
	let total = chin;

	// Define o laço de repetição
	for (let i = 1; i <= anos; i++) {
		resposta = resposta + i + " ano: " + total + " Chinchilas\n";
		total = total * 3;
	}

	// Altera o conteúdo da tag de resposta definida
	resp.innerText = resposta;
});
