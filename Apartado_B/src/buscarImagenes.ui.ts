import { extraerImagenes } from "./buscarImagenes";

const botonExtraer = document.getElementById('extraer') as HTMLButtonElement;
const texto = document.getElementById('texto') as HTMLTextAreaElement;
const respuesta = document.getElementById('respuesta') as HTMLDivElement;

botonExtraer.addEventListener('click', () => {
    handleClickExtraer();
});

export function handleClickExtraer () {
    const resultado = extraerImagenes(texto.value);

    respuesta.innerHTML = '';

    if (resultado && resultado.length > 0) {
        resultado.forEach(url => {
            const img = document.createElement('img');
            img.classList.add('imagen');
            img.src = url;
            respuesta.appendChild(img);
        });
    } else {
        alert('No se han encontrado imágenes');
    }
};