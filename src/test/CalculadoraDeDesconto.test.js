// __tests__/CalculadoraDeDesconto.test.js

const CalculadoraDeDesconto = require("../CalculadoraDesconto");

describe("CalculadoraDeDesconto", () => {
  let calculadora;

  // Cria uma instância nova antes de cada teste
  beforeEach(() => {
    calculadora = new CalculadoraDeDesconto();
  });

  // Teste 1 — Sem desconto
  test("valor 50 não recebe desconto → 50", () => {
    expect(calculadora.calcular(50)).toBe(50);
  });

  // Teste 2 — 10% de desconto
  test("valor 200 recebe 10% de desconto → 180", () => {
    expect(calculadora.calcular(200)).toBe(180);
  });

  // Teste 3 — 20% de desconto
  test("valor 600 recebe 20% de desconto → 480", () => {
    expect(calculadora.calcular(600)).toBe(480);
  });

  // Teste 4 — Cliente VIP
  test("valor 200 com VIP recebe 15% de desconto → 170", () => {
    expect(calculadora.calcular(200, true)).toBe(170);
  });

  // Teste 5 — Valor negativo
  test("valor negativo lança exceção", () => {
    expect(() => calculadora.calcular(-100)).toThrow("Valor não pode ser negativo");
  });
});