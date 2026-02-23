const prompt = require('prompt-sync')();

const Heroi = require('./personagens/heroi');
const Vilao = require('./personagens/vilao');

const fase1 = require('./fases/fase1');
const fase2 = require('./fases/fase2');
const fase3 = require('./fases/fase3');
const faseFinal = require('./fases/faseFinal');

//APRESENTAÇÃO DO JOGO
console.log('NOME DO JOGO');
console.log();
console.log('Bem vindo jogador, esse é o mais novo jogo de ação por texto');
console.log(
  'Precisamos contruir seu personagem na qual irá se aventurar pelo nosso mundo',
);
console.log();
console.log('APRESENTAÇÃO PERSONAGEM');
const nome = prompt('Diga o melhor nome que venha a sua cabeça: ');

console.log(nome);

//CRIA O PERSONAGEM
const heroi = new Heroi(100, nome, 100, 50);

console.log(
  `Seu personagem foi criado, agora sempre chamaremos ele de ${heroi.nome}`,
);
console.log();
heroi.status();
console.log();
console.log(
  `Aparentemente o personagem ${heroi.nome} está caminhando a dias e precisa comer`,
);

//ENSINA A COMER
if (
  prompt('deseja comer uma fruta? S- sim ou N - não: ').toUpperCase() == 'S'
) {
  heroi.alimentar(5, 2);
  console.log(`hmmm que fruta boa, disse ${heroi.nome}`);
  heroi.status();
} else if (
  prompt(
    'Então deseja comer uma carne de caça? S- sim ou N - não: ',
  ).toUpperCase() == 'S'
) {
  heroi.alimentar(10, 5);
  console.log('Essa carne estava ótima');
  heroi.status();
} else {
  console.log('SEU PERSONAGEM NÃO RESTAUROU FOME OU VIDA');
}

//ENSINA A MELHORAR O CONDICIONAMENTO FISICO(FORCA)
console.log(
  `Ao longe, o nosso herói ${heroi.nome} avistou um grande lago e foi se aproximando`,
);
console.log('Dentro do lago, existe um ponto brilhante');
if (
  prompt(
    'deseja nadar até o ponto brilhante? S - Sim ou N - Não: ',
  ).toUpperCase() == 'S'
) {
  heroi.treinar(10);
  console.log();
  console.log(
    `Era mais interessante de longe, ao pegar o objeto brilhante, ${heroi.nome}, percebeu que se tratava de latinha de refrigerante`,
  );
  console.log(
    `Logo após, o herói ${this.heroi} retornou a margem do lago e se secou`,
  );
  console.log(`PARABÉNS, ${heroi.nome} GANHOU 10 DE FORÇA`);
  heroi.status();
  
  
} else {
  console.log(`Ufaa, disse ${this.heroi}, a agua estava bastante fria`);
}
console.log(
  'Algum tempo se passou e havia no meio do caminho uma arvore bem alta',
);
console.log('No meio dessa arvore, existia uma sacola amarrada');
if (
  prompt(
    'deseja subir na arvore para pegar a sacola? S - Sim ou N - Não: ',
  ).toUpperCase() == 'S'
) {
  console.log(
    `Puxa mas que sorte, dentro da sacola, dentro da sacola havima 5 moedas`,
  );
  heroi.depositar(5);
  heroi.treinar(15);
  heroi.status();
} else {
  console.log(
    `Nossa que preguiça, não vou subir nessa arvore, disse ${heroi.nome}`,
  );
  console.log(`seu personagem ${heroi.nome}, perde pontos de força`);
}

//FIM DA FASE DE INTRO
const resultFase1 = fase1(heroi)

if (resultFase1) {
  const resultFase2 = fase2(heroi);
  if (resultFase2) {
    faseFinal(heroi);
  } else {
    fase3(heroi);
    faseFinal(heroi);
  }
} else {
  console.log('GAME OVER');
}
 