console.log("Seja bem-vindo (a) ao Desafio DIO: Escrevendo as Classes de Um Jogo");
console.log("");

class Heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
      this.nomeHeroi = nomeHeroi;
      if (this.validarIdadeHeroi(idadeHeroi)){
          this.idadeHeroi = idadeHeroi;
      } else {
          throw new Error("A idade do herói deve estar entre 18 e 65 anos.");
      }
      if (this.validarTipoHeroi(tipoHeroi)){
          this.tipoHeroi = tipoHeroi;
      } else {
          throw new Error("O tipo do herói deve ser um dos seguintes: guerreiro, mago, monge ou ninja.");
      }
    } 
  
    validarIdadeHeroi(idadeHeroi) {
      return idadeHeroi >= 18 && idadeHeroi <= 65;
    }
  
    validarTipoHeroi(tipoHeroi) {
      const opcoesTipoHeroi = ["guerreiro", "mago", "monge", "ninja"];
      return opcoesTipoHeroi.includes(tipoHeroi);
    }
    
    atacar() {
        const ataquesPorTipo = {
          mago: "magia",
          guerreiro: "espada",
          monge: "artes marciais",
          ninja: "shuriken"
        };
    
        if (this.tipoHeroi in ataquesPorTipo) {
          const ataqueHeroi = ataquesPorTipo[this.tipoHeroi];
          console.log(`O ${this.tipoHeroi} atacou usando ${ataqueHeroi}.`);
        } else {
          console.log("Tipo de herói inválido.");
        }
    }
    exibirInformacoes() {
        console.log("Informações do Herói");  
        console.log(`Nome: ${this.nomeHeroi}`);
        console.log(`Idade: ${this.idadeHeroi}`);
        console.log(`Tipo: ${this.tipoHeroi}`);
      }
}
let primeiroHeroi = new Heroi("Tonhão" , 18 , "guerreiro");
primeiroHeroi.atacar();
console.log("");
primeiroHeroi.exibirInformacoes();