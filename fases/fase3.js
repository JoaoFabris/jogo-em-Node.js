const prompt = require('prompt-sync')();

function random() {
  const num = Math.floor(Math.random() * 100);
  if(num % 2 === 0) {
    return true
  } else {
    return false
  }
}

module.exports = (heroi) => {
  console.log(
    'A floresta nesse ponto ficou menos fechada, nosso herói avistou uma grande espaço aberto',
  );
  console.log(
    `Uma enorme claleira em meio a mata, algumas frutas, pedras e arbustos compunham a paisagem`,
  );
  if (
    prompt(
      'Deseja coletar e comer uma dessas frutas? S- sim ou N - não: ',
    ).toUpperCase() == 'S'
  ) {
    heroi.alimentar(20, 20);
    heroi.status();
    console.log('FRUTAS DELICIOSAS');
  } else {
    console.log();

    console.log(`hm, ja estou cheio, disse ${heroi.nome}`);
  }
  console.log();
  console.log(
    `Algo chamou a atenção do ${heroi.nome}, em meio das pedras alguma coisa se destacava`,
  );
  console.log(
    'Logo nosso se aproximou e percebeu uma bolsa um pouco diferente',
  );
  if (
    prompt(
      'Deseja abrir a bolsa e verificar o que há dentro dela? S- sim ou N - não: ',
    ).toUpperCase() == 'S'
  ) {
    if(random()){
        console.log();   
        console.log(" Foi encontrado uma poção e 50 moedas, hoje é meu dia de sorte");
        heroi.restaurarVida(50)
        heroi.depositar(50)
        heroi.status()
    } else {
        console.log();
        console.log("Aiiiii, cobrar maldita, uma cobra me mordeu");
        console.log("nosso herói perdeu 50 de vida");
        console.log();
        heroi.defender(50)
        heroi.status()
    }
  }
  console.log();
  console.log(
    `logo após, um brilho surge no centro da claleira, um portal que abre e nosso herói se aproxima e entra no portal`,
  );
};
