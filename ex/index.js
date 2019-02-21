
const logger = require('./logger')

class Pessoa{
    constructor(nome){
        logger.info(nome)
        this.nome = nome;
    }

    toString(){
        return `Pessoa: ${this.nome}`
    }
    
}

const pessoa = new Pessoa('THIAGO ARAUJO - tjca1@hotmail.com')
logger.info(pessoa.toString());

