const prompt = require('prompt-sync')();
const Vilao = require('../personagens/vilao');

function lutar(heroi) {
  console.log(`Preparados ou não la vem a luta`);
  const vilao = new Vilao(200, 50);
  while (heroi.vida > 0 && vilao.vida > 0) {
    vilao.defender(heroi.atacar());
    heroi.defender(vilao.atacar());
    console.log(`Vida do heroi: ${heroi.vida}`);
    console.log(`Vida do vilao: ${vilao.vida}`);
    console.log();
  }
  if (heroi.vida <= 0) {
    console.log('vilao venceu');
    return false
  } else {
    console.log('heroi venceu');
    return true
  }
}

module.exports = (heroi) => {
  let luta = false;

  console.log(
    `Algumas horas depois o herói ${heroi.nome}, andando pela floresta, percebeu que não estava sozinho`,
  );
  console.log(
    'Um pouco mais a frente existia uma figura estranha que não parecida ser amigável',
  );
  console.log();
  console.log(`Um troll enorme pulou na frente de ${heroi.nome}`);

  if (
    prompt(
      'O troll aparentemente quer briga, seseja lutar? S- sim ou N - não: ',
    ).toUpperCase() == 'S'
  ) {
    console.log();
    console.log('Se prepare, ai vem o primeiro golpe');
    luta = lutar(heroi);
  } else {
    console.log('Esta na hora de fugir da batalha, o herói tenta fugir');
    console.log('porém o troll é esperto e te encontrou');
    luta = lutar(heroi);
  }

  if (luta) {
    heroi.restaurar();
    heroi.depositar(50);
    heroi.status();
    console.log(
      `PARABÉNS ${heroi.nome} você conseguiu vencer o troll da floresta, receba seus premios`,
    );
    console.log("====== FIM DA BATALHA ========");
    console.log();
    
    return true;
  } else {
    return false;
  }
};
