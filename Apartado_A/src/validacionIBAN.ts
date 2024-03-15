import * as ibantools from "ibantools";
import { Banco, bancos } from "./validacionIBAN.model";

export const estaBienFormadoIban = (iban: string): boolean => {
    const patron = /^[A-Z]{2}\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/;
    return patron.test(iban);
};

export const nombreBancoIban = (codigoBanco: string, bancos : Banco[]) => {
    const banco = bancos.find(banco => banco.codigo === codigoBanco);
    if(banco){
        return banco.nombre;
    } else {
        return console.error("Código de banco no encontrado");
    }
};

export const extraerInfoIBAN = (iban: string) => {
    const patron = /^(?<codPais>[A-Z]{2})(?<digitoCtrlA>\d{2})(\s|-)?(?<codBanco>\d{4})(\s|-)?(?<codSucursal>\d{4})(\s|-)?(?<digitoCtrlB>\d{2})(\s|-)?(?<cuenta>\d{10})$/;

    const coincidencia = patron.exec(iban);

    if(coincidencia){
        const { codPais, digitoCtrlA, codBanco, codSucursal, digitoCtrlB, cuenta } = coincidencia.groups as any;
        return {
            codPais,
            digitoCtrlA,
            codBanco,
            codSucursal,
            digitoCtrlB,
            cuenta
        };
    } else {
        return console.error("El IBAN no es válido");
    }

};


export const comprobacionIban = (iban: string, bancos: Banco[]) => {
    const bienFormado = estaBienFormadoIban(iban);

    if (!bienFormado) {
        console.error("El IBAN no está bien formado");
        return null;
    }

    const ibanValido = ibantools.validateIBAN(iban);

    if (!ibanValido) {
        console.error("El IBAN no es válido");
        return null;
    }

    const infoIban = extraerInfoIBAN(iban);

    if(infoIban){
        const codigoBanco = infoIban.codBanco;
        const nombreBanco = nombreBancoIban(codigoBanco, bancos);
        return {
            iban,
            banco: nombreBanco,
            infoIban
        };
    }

    return null; 
};

console.log(comprobacionIban("ES4400811718656672372259", bancos));
console.log(comprobacionIban("ES3904879685019987998231", bancos));