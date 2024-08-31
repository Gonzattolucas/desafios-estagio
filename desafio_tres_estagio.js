// Dados de faturamento diário em formato JSON
const faturamentoDiario = [
    {"dia": 1, "valor": 1000},
    {"dia": 2, "valor": 0}, // Feriado ou final de semana
    {"dia": 3, "valor": 2300},
    {"dia": 4, "valor": 1500},
    {"dia": 5, "valor": 0}, // Feriado ou final de semana
    {"dia": 6, "valor": 0}, // Feriado ou final de semana
    {"dia": 7, "valor": 5400},
    {"dia": 8, "valor": 600},
    {"dia": 9, "valor": 0}, // Feriado ou final de semana
    {"dia": 10, "valor": 1300},
    // ... outros dias do mês
];

// Calcula o menor e maior valor de faturamento, e a média dos dias com faturamento
function calcularFaturamento(faturamento) {
    let menorFaturamento = Number.MAX_SAFE_INTEGER;
    let maiorFaturamento = Number.MIN_SAFE_INTEGER;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    faturamento.forEach(dia => {
        if (dia.valor > 0) {
            somaFaturamento += dia.valor;
            diasComFaturamento++;

            if (dia.valor < menorFaturamento) {
                menorFaturamento = dia.valor;
            }

            if (dia.valor > maiorFaturamento) {
                maiorFaturamento = dia.valor;
            }
        }
    });

    const mediaFaturamento = somaFaturamento / diasComFaturamento;

    // Calcula o número de dias em que o faturamento foi superior à média
    const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > mediaFaturamento).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia,
    };
}

// Executa o cálculo
const resultado = calcularFaturamento(faturamentoDiario);

// Exibe os resultados
console.log(`Menor valor de faturamento: ${resultado.menorFaturamento}`);
console.log(`Maior valor de faturamento: ${resultado.maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
