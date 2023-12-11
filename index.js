// Função para calcular o preço do frete
function calcularFrete(peso, distancia, tipoCarga) {
    // Defina suas taxas e critérios de cálculo aqui
    const taxaBase = 10; // Taxa base do frete
    const taxaDistancia = 2; // Taxa por quilômetro
    const taxaPeso = 0.5; // Taxa por quilo
    const taxaCargaExpressa = 5; // Taxa adicional para carga expressa

    // Cálculo do preço do frete
    let precoFrete = taxaBase + (distancia * taxaDistancia) + (peso * taxaPeso);

    // Verificar o tipo de carga e adicionar taxa adicional, se necessário
    if (tipoCarga === 'expressa') {
        precoFrete += taxaCargaExpressa;
    }

    return precoFrete;
}

// Exemplo de uso da função
const pesoCarga = 500; // em quilos
const distanciaEntrega = 100; // em quilômetros
const tipoDeCarga = 'normal'; // 'normal' ou 'expressa'

const precoTotalFrete = calcularFrete(pesoCarga, distanciaEntrega, tipoDeCarga);
console.log(`O preço do frete é: R$ ${precoTotalFrete.toFixed(2)}`);