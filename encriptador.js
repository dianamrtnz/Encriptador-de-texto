const texto_ingresado = document.querySelector("#texto_entrada");
const ventana = document.querySelector("#Mensaje_encriptado");

const matriz = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];

const matriz2 = [
    ['enter', 'e'],
    ['imes', 'i'],
    ['ai', 'a'],
    ['ober', 'o'],
    ['ufat', 'u']
];


function btnEncriptar(event) {
    event.preventDefault();
    const texto = encriptar(texto_ingresado.value.toLowerCase());
    ventana.value = texto;
    limpiarCaja();
}

function encriptar(frase_encriptada){
    for(let i = 0; i< matriz.length; i++){
        if(frase_encriptada.includes(matriz[i][0])){
            frase_encriptada = frase_encriptada.replaceAll(
                matriz[i][0],
                matriz[i][1]
            )
        }
    }
    return frase_encriptada;
}

function btnDesencriptar(event) {
    event.preventDefault();
    const texto2 = desencriptar(texto_ingresado.value.toLowerCase());
    ventana.value = texto2;
    limpiarCaja();
}

function desencriptar(frase_desencriptada) {
    for (let i = 0; i < matriz2.length; i++) {
        if (frase_desencriptada.includes(matriz[i][0])) {
            frase_desencriptada = frase_desencriptada.replaceAll(
                matriz2[i][0],
                matriz2[i][1]
            )
        }
    }
        return frase_desencriptada;  
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#texto_entrada');
    valorCaja.value = '';
}



