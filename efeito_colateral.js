// Alguns exemplos de efeitos colaterais incluem modificar um objeto global (alguma variável global, por exemplo) ou um parâmetro passado como referência.

let nome = "Breno";

function incrementarNome(nomeRecebido) {
  nome = nomeRecebido + " mora em Brumado";
  console.log(nome);
}

incrementarNome(nome); // Breno mora em Brumado
console.log(nome); // Breno mora em Brumado