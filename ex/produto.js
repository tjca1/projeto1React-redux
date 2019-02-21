export default class Produto{

    constructor(){
        
    }
    
    getProduto(_nome, _preco, _desconto){
        const p = {
            nome:_nome,
            preco: _preco,
            desconto: _desconto
        }
        return p;
    }

    clone(obj){
        return {...obj}
    }
    
  
}