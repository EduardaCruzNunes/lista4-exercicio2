var valor1 = 0;
var valor2 = 0;
let resultado = 0;

valor1 = prompt('Digite um valor:');

while (valor2 == 0) {
    valor2 = prompt('Digite mais um valor, diferente de zero:');
}

const informeOvalor = () => {
    resultado = valor1 / valor2;
    return `${resultado}: resultado da divisão: entre ${valor1} e ${valor2}; `
}
console.log(informeOvalor());
