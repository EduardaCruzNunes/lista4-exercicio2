var valor1 = 0;
var valor2 = 0;
var numero = [];
var resultado = [];

valor1 = prompt('Digite um valor:');

valor2 = prompt('Digite mais um valor:');

while (numero.length < 1) {
    numero.push(valor2);
    if (valor2 == 0) {
        valor2 = prompt('Não foi possível ler o valor, digite novamente:');
    }
}

const informeOvalor = () => {
    resultado = valor1 / valor2;
    return `${resultado}: resultado da divisão: entre ${valor1} e ${valor2}; `
}
console.log(informeOvalor());

