let classeEscolhida = "";
let racaEscolhida = "";

// Dados de classes
const classes = {
  guerreiro: {
    nome: "Guerreiro",
    habilidade: "Ataque poderoso com espada."
  },
  mago: {
    nome: "Mago",
    habilidade: "Lança feitiços arcanos."
  },
  ladino: {
    nome: "Ladino",
    habilidade: "Ataques furtivos e grande destreza."
  }
};

// Dados de raças
const racas = {
  humano: {
    nome: "Humano",
    descricao: "Versátil e adaptável a qualquer situação."
  },
  elfo: {
    nome: "Elfo",
    descricao: "Ágil, inteligente e excelente com magias."
  },
  anao: {
    nome: "Anão",
    descricao: "Forte, resistente e ótimo no combate físico."
  }
};

function selecionarClasse(classe) {
  classeEscolhida = classe;
  document.getElementById("selecao-classe").style.display = "none";
  document.getElementById("selecao-raca").style.display = "block";
}

function selecionarRaca(raca) {
  racaEscolhida = raca;
  document.getElementById("selecao-raca").style.display = "none";
  document.getElementById("selecao-nome").style.display = "block";
}

function criarFicha() {
  const nome = document.getElementById("nome").value;
  if (!nome) {
    alert("Por favor, digite o nome do personagem!");
    return;
  }

  const classe = classes[classeEscolhida];
  const raca = racas[racaEscolhida];

  const resultado = `
    <h2>Ficha do Personagem</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Classe:</strong> ${classe.nome}</p>
    <p><strong>Habilidade:</strong> ${classe.habilidade}</p>
    <p><strong>Raça:</strong> ${raca.nome}</p>
    <p><strong>Descrição da Raça:</strong> ${raca.descricao}</p>
  `;

  document.getElementById("resultado").innerHTML = resultado;
  document.getElementById("selecao-nome").style.display = "none";
}
