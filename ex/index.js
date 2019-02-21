const logger = require('./logger')
import Pessoa from './pessoa'
import Produto from './produto'



const pessoa = new Pessoa('THIAGO ARAUJO - tjca1@hotmail.com')
logger.info(pessoa.toString());
console.log(pessoa.toString()) 
//////////////////////////////////////////////////////////////////////

const produto = new Produto();
const p =  produto.getProduto('THIAGO ARAUJO__________',0.50, 0.8 );
logger.info(JSON.stringify(p));
logger.info('=============================================================================');
const novoP = produto.clone(p);
novoP.nome = 'NOME TESTE CLONE';
logger.info(JSON.stringify(novoP));  
