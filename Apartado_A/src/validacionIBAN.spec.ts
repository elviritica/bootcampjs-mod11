import { estaBienFormadoIban } from "./validacionIBAN";

describe("estaBienFormadoIban", () => {
  test.each([
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["ES6621000418401234567891", true],
    ["ES66210 0041840123 4567891", false],
    ["ES 6621000418401234567891", false],
    ["ES6621 000 4184012 345678 91", false],
  ])(
    "Deberia devolver para la IP %s el valor %s",
    (valor: string, expected: boolean) => {
      expect(estaBienFormadoIban(valor)).toBe(expected);
    }
  );
});
