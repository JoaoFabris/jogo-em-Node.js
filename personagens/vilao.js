const Personagem = require('./personagem');

class Vilao extends Personagem {
  constructor(vida, forcaAtaqueEsp) {
    super(vida);
    this.forcaAtaqueEsp = forcaAtaqueEsp;
  }

  forcaEsp() {
    return this.forcaAtaqueEsp;
  }

  atacar() {
    return Math.floor(Math.random() * this.vida);
  }
  defender(golpe) {
    this.vida -= golpe;
  }
}

module.exports = Vilao;
