export function extraerImagenes(texto: string): string[] {
    const regex = /<img[^>]*src="([^"]*)"[^>]*>/gm;
    let resultado;
    const imagenes: string[] = [];

    while ((resultado = regex.exec(texto)) !== null) {
        imagenes.push(resultado[1]);
    }

    return imagenes;
}