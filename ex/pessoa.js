const logger = require('./logger')

export default class Pessoa{
    constructor(nome){
        logger.info(nome)
        this.nome = nome;
    }

    toString(){
        return `Pessoa: ${this.nome}`
    }
    
}