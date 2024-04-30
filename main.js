const form = document.getElementById("form-contatos");
const nome = [];
const telefone = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById("nomeContato");
  const inputTelContato = document.getElementById("telContato");

  if (nome.includes(inputNomeContato.value)) {
    alert(`Esse contato já foi inserido (${inputNomeContato.value})`);
  } else {
    nome.push(inputNomeContato.value);
    telefone.push(parseInt(inputTelContato.value));

    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  inputNomeContato.value = "";
  inputTelContato.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
