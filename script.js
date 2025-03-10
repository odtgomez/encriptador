const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".contenido__resultados__resultados");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado = encriptar (textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0;i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
}
return stringEncriptada;
}


function botonDesencriptar(){
    const textoEncriptado = desencriptar (textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0;i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
}
return stringDesencriptada;
}

function botonCopiar(){
        const texto = mensaje.value;
    
        if (texto) {
            navigator.clipboard.writeText(texto).then(() => {
                alert("Texto copiado al portapapeles");
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        } else {
            alert("No hay texto para copiar");
        }
    }