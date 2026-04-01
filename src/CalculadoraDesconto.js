// src/CalculadoraDeDesconto.js

class CalculadoraDeDesconto {
  calcular(valor, isVip = false) {

    // Regra: valor não pode ser negativo
    if (valor < 0) {
      throw new Error("Valor não pode ser negativo");
    }

    // Regra: define o percentual de desconto base
    let percentualDesconto = 0;

    if (valor >= 100 && valor <= 500) {
      percentualDesconto = 10;       // 10% para valores entre 100 e 500
    } else if (valor > 500) {
      percentualDesconto = 20;       // 20% para valores acima de 500
    }

    // Regra: cliente VIP ganha +5% adicional
    if (isVip) {
      percentualDesconto += 5;
    }

    // Calcula e retorna o valor final
    return valor - (valor * percentualDesconto) / 100;
  }
}

module.exports = CalculadoraDeDesconto;