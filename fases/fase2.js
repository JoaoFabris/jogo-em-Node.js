const prompt = require('prompt-sync')();

module.exports = (heroi) => {
  console.log(
    `Após uma longa caminhada e uma batalha árdua, ${heroi.nome} chegou a um vilarejo`,
  );
  console.log(
    `Ao olhar a sua volta, percebeu uma pequena barraca onde um senhor o observava`,
  );
  console.log(
    `${heroi.nome} foi em direção à barraca e perguntou ao senhor o que ele fazia ali`,
  );
  console.log();
  console.log(
    `"Vendo algumas poções de cura para viajantes", disse o senhor da barraca`,
  );
  console.log(`Sua carteira: ${heroi.moedas} moedas`);
  console.log();

  // Poção de Força
  if (
    prompt(
      'Deseja comprar uma poção de FORÇA por 10 moedas? S - sim ou N - Não: ',
    ).toUpperCase() === 'S'
  ) {
    if (heroi.moedas >= 10) {
      heroi.sacar(10);
      heroi.treinar(10);
      console.log('Você comprou uma poção de força!');
      heroi.status();
    } else {
      console.log('Moedas insuficientes para comprar a poção de força.');
    }
  } else {
    console.log(`"Poção de força tem um gosto ruim, não vou querer agora"`);
    console.log(`"O senhor tem algo mais para oferecer?"`);
  }
  console.log();

  // Poção de Vida
  if (
    prompt(
      'Deseja comprar uma poção de VIDA por 20 moedas? S - sim ou N - Não: ',
    ).toUpperCase() === 'S'
  ) {
    if (heroi.moedas >= 20) {
      console.log('Você comprou uma poção de vida!');
      heroi.sacar(20);
      heroi.restaurarVida(10);
      heroi.status();
      heroi.status();
    } else {
      console.log('Moedas insuficientes para comprar a poção de vida.');
    }
  } else {
    console.log(
      `"Acho que tenho vida suficiente para seguir meu caminho", disse ${heroi.nome}`,
    );
  }
  console.log();
  console.log(`${heroi.nome} se despediu e foi embora!!`);
  console.log("Nosso herói segui o caminho e foi...");
  console.log();
  console.log(`Logo após, ${heroi.nome} se deparou com um caminho bifurcado`);
  console.log(
    `"É melhor eu ir para esquerda ou para direita?", disse ${heroi.nome}`,
  );

  const escolhaCaminho = prompt(
    'Ir pela direita ou pela esquerda? D - Direita ou E - Esquerda: ',
  ).toUpperCase();
  if (escolhaCaminho === 'D') {
    console.log(
      `${heroi.nome} seguiu a trilha pela direita e encontrou um portal para FASE FINAL`,
    );
    return true;
  } else if (escolhaCaminho === 'E') {
    console.log(`${heroi.nome} seguiu pela esquerda`);
    return false;
  } 
};
