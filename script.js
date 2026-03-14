function pesquisar() {
const texto = document.querySelector("#pesquisa").value;

if (texto.trim() === "") {
document.querySelector("#resultado").innerText =
"Digite algo para pesquisar!";
return;
}

document.querySelector("#resultado").innerText =
"Você pesquisou: " + texto;
}
