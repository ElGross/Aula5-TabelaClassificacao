var a = {
  nome: "A",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var b = {
  nome: "B",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var c = {
  nome: "C",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var d = {
  nome: "D",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var elementoTabela = document.getElementById("tabelaJogadores");
exibirNaTela();
function exibirNaTela() {
  elementoTabela.innerHTML = `
  <tr>
        <td>${a.nome}</td>
        <td>${a.vitoria}</td>
        <td>${a.empate}</td>
        <td>${a.derrota}</td>
        <td>${a.pontos}</td>
        <td><button onClick="adicionarV(a)">V</button></td>
        <td><button onClick="adicionarE(a)">E</button></td>
        <td><button onClick="adicionarD(a)">D</button></td>
      </tr>
      
      <tr>
        <td>${b.nome}</td>
        <td>${b.vitoria}</td>
        <td>${b.empate}</td>
        <td>${b.derrota}</td>
        <td>${b.pontos}</td>
        <td><button onClick="adicionarV(b)">V</button></td>
        <td><button onClick="adicionarE(b)">E</button></td>
        <td><button onClick="adicionarD(b)">D</button></td>
      </tr>
      
        <tr>
        <td>${c.nome}</td>
        <td>${c.vitoria}</td>
        <td>${c.empate}</td>
        <td>${c.derrota}</td>
        <td>${c.pontos}</td>
        <td><button onClick="adicionarV(c)">V</button></td>
        <td><button onClick="adicionarE(c)">E</button></td>
        <td><button onClick="adicionarD(c)">D</button></td>
      </tr>
      
      <tr>
        <td>${d.nome}</td>
        <td>${d.vitoria}</td>
        <td>${d.empate}</td>
        <td>${d.derrota}</td>
        <td>${d.pontos}</td>
        <td><button onClick="adicionarV(d)">V</button></td>
        <td><button onClick="adicionarE(d)">E</button></td>
        <td><button onClick="adicionarD(d)">D</button></td>
      </tr>
`;
}

function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela();
}
function adicionarEmpate(jogador) {
  jogador.empate++;
  jogador.pontos++;
  exibirNaTela();
}
function adicionarDerrota(jogador) {
  jogador.derrota++;
  exibirNaTela();
}