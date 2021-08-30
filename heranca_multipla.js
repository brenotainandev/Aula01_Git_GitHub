class Cidade{
    constructor(cidade, estado, idade){
        this.cidade = cidade;
        this.estado = estado;
        this.idade = idade;
        this.temAeroporto = true;
    }

    aumentarIdade(){
        this.idade++;
    }
}

class Endereco extends Cidade{
    constructor(cidade, estado, idade, rua, numero, bairro){
        super(cidade, estado, idade);
        this.rua = rua;
        this.numero = numero;
        this.bairro =  bairro;
    }
}


const ruaAlagoas = new Endereco('Brumado', 'Bahia', 160,'Alagoas', 10, 'Esmeralda');
console.log(ruaAlagoas); //Endereco {
                            //cidade: 'Brumado',
                            //estado: 'Bahia',
                            //idade: 160,
                            //temAeroporto: true,
                            //rua: 'Alagoas',
                            //numero: 10,
                            //bairro: 'Esmeralda'
                         //}