var sobrecargaOperador = {
    get: function(target, nome) {
        return "Breno, " + nome;
    }
};
var proxy = new Proxy({}, sobrecargaOperador);

console.log(proxy.morou+" em Brumado - BA em: "+(2018*2/2+1));  // Breno, morou em Brumado - BA em: 2019