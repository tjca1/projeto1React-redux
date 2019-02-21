const logger = require('./logger')
import Pessoa from './pessoa'



const pessoa = new Pessoa('THIAGO ARAUJO - tjca1@hotmail.com')
logger.info(pessoa.toString());
console.log(pessoa.toString()) 

