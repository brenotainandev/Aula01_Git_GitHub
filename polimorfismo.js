class cidades{
    constructor(cidade, estado){
        this.cidade = cidade;
        this.estado = estado;
    }

    nome(){
            return this.cidade + " - " + this.estado;
    }
}

class paises{
    constructor(pais){
        this.pais = pais;
    }

    nome(){
        return this.pais;
    }

}

let lista = [];
lista.push(new cidades("Brumado", "Bahia"));
lista.push(new paises("Argentina"));
lista.push(new cidades("Aracatu", "Bahia"));
lista.push(new paises("Brasil"));
lista.push(new cidades("São Paulo", "São Paulo"));
lista.push(new paises("Angola"));

for (let index = 0; index < lista.length; index++) {
    console.log(lista[index].nome())
}


