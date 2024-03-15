import "./style.css";
import { comprobacionIban } from "./validacionIBAN";
import { bancos } from "./validacionIBAN.model";

import { handleClickExtraer } from "./validacionIBAN.ui";

document.addEventListener("DOMContentLoaded", () => {
  handleClickExtraer();
});

console.log(comprobacionIban("ES4400811718656672372259", bancos));
console.log(comprobacionIban("ES3904879685019987998231", bancos));
