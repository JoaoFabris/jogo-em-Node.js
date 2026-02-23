const prompt = require('prompt-sync')();

const Vilao = require('./personagens/vilao');
const Heroi = require('./personagens/heroi');

const heroi = new Heroi(80, 'John', 80, 50);

function d20() {
  let num = Math.floor(Math.random() * 20) + 1;
  return num;
}

function luta(heroi) {
  const boss = new Vilao(300, 50);
  let rodada = 1;

  while (heroi.vida > 1 && boss.vida > 1) {
    console.log();
    console.log(`RODADA - ${rodada}`);
    const dadoVilao = d20();
    const dadoHeroi = d20();
    console.log();

    console.log(`Dado D20 do ${heroi.nome}: ${dadoHeroi}`);
    console.log(`Dado D20 do BOSS: ${dadoVilao}`);

    if (dadoHeroi >= dadoVilao) {
      boss.defender(heroi.atacar());
    } else {
      heroi.defender(boss.atacar());
    }

    prompt('Aperte o ENTER para a proxima rodada');
    rodada++;
  }

  if (heroi.vida > 1) {
    return true;
  } else {
    return false
  }
}

console.log(luta(heroi));
