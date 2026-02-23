const prompt = require('prompt-sync')();

const Vilao = require('../personagens/vilao');


function d20() {
  let num = Math.floor(Math.random() * 20) + 1;
  return num;
}

function luta(heroi) {
  const boss = new Vilao(50, 50);
  let rodada = 1;

  while (heroi.vida > 1 && boss.vida > 1) {
    console.log();
    console.log(`RODADA - ${rodada}`);
    const dadoVilao = d20();
    const dadoHeroi = d20();
    console.log();

    console.log(`Dado D20 do ${heroi.nome}: ${dadoHeroi}`);
    console.log(`Dado D20 do BOSS: ${dadoVilao}`);
    console.log();
    console.log(`Vida do ${heroi.nome}: ${heroi.vida}`);
    console.log(`Vida do BOSS: ${boss.vida}`);
    
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

console.log(d20());

module.exports = (heroi) => {
  console.log(
    `parece que nem um segundo havia se passado, mas ${heroi.nome} foi transportado para uma terra muito distante`,
  );
  console.log(
    `Olhando a sua volta, ${heroi.nome} percebe que esta em uma arena de batalha, algo muito parecido com o que ele lia em suas historias de quadrinhos`,
  );
  console.log();
  console.log(
    `Ele não estava sozinho, nessa arena havia milhares de pessoas gritavam e torciam para o herói ${heroi.nome}!!`,
  );
  console.log(
    `Um enorme portão de ferro se abriu e algo muito grande saiu dele`,
  );
  console.log(`${heroi.nome} !!!, gritou o monstro, agora você não escapa`);
  console.log(`Espero por esse momento há anos, disse BOSS`);
  console.log("=========A LUTA VAI COMEÇAR!!===========");
  
  if(luta(heroi)){
    heroi.restaurar()
    heroi.depositar(1000)
    heroi.status()
    console.log("========== CRÉDITOS ===========");
    
    console.log("jogo texto desenvolvido por João Fabris");
    console.log("Obrigado por ter jogado");
  } else {
    console.log('GAME OVER');

  }
  
};
