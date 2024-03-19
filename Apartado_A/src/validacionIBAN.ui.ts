import { comprobacionIban } from "./validacionIBAN";
import { bancos } from "./validacionIBAN.model";

export const loadApp = () => {
  const botonExtraer = document.getElementById("extraer") as HTMLButtonElement;

  botonExtraer.addEventListener("click", () => {
    handleClickExtraer();
  });

  const handleClickExtraer = () => {
    const ibanInput = document.getElementById("iban") as HTMLInputElement;
    const resultado = comprobacionIban(ibanInput.value, bancos);

    if (resultado && resultado.infoIban) {
      document.getElementById("formado")!.innerText = `¿Está bien formado?: ${
        resultado.iban ? "Sí" : "No"
      }`;
      document.getElementById("valido")!.innerText = `¿Es válido?: ${
        resultado.iban ? "Sí" : "No"
      }`;
      document.getElementById("banco")!.innerText = `Banco: ${resultado.banco}`;
      document.getElementById(
        "sucursal"
      )!.innerText = `Sucursal: ${resultado.infoIban.codSucursal}`;
      document.getElementById(
        "digito-control"
      )!.innerText = `Dígito de control: ${resultado.infoIban.digitoCtrlB}`;
      document.getElementById(
        "numero-cuenta"
      )!.innerText = `Número de cuenta: ${resultado.infoIban.cuenta}`;
    } else {
      alert("El IBAN no es válido");
    }
  };
};
