let mensajeLiteral = "";
let mensajeTraducido = "";
let vocales = ['e','i','a','o','u'];
let neoVocales = ['enter','imes','ai','ober','ufat'];
let formatoTraduccion = document.getElementById('presentacionDeTraduccion');

function encriptarMensaje(mensajeLiteral) {
    mensajeLiteral = document.getElementById('mensajeDeUsuario').value;
    mensajeTraducido = mensajeLiteral;
    
    for (let i = 0; i < vocales.length; i++){
        let regexA = new RegExp(vocales[i],'g');
        mensajeTraducido = mensajeTraducido.replace(regexA, neoVocales[i]);
    }
    document.getElementById('mensajeTransformado').style.backgroundImage = 'none';
    document.getElementById('mensajeTransformado').value = mensajeTraducido;
}

function traducirMensaje(mensajeLiteral){
    mensajeLiteral = document.getElementById('mensajeDeUsuario').value;
    mensajeTraducido = mensajeLiteral;

    for (let n = 0; n < neoVocales.length; n++){
        let regexB = new RegExp(neoVocales[n],'g');
        mensajeTraducido = mensajeTraducido.replace(regexB, vocales[n]);
    }
    document.getElementById('mensajeTransformado').style.backgroundImage = 'none';
    document.getElementById('mensajeTransformado').value = mensajeTraducido;
}

function copiarTexto(){ 
    navigator.clipboard.writeText(mensajeTraducido);
    return;
}


/*

    ### FOR TESTING PURPOSES ONLY ###

mensajeLiteral = 'esto es una prueba';
mensajeTraducido = encriptarMensaje(mensajeLiteral);
console.log(mensajeTraducido);

mensajeLiteral = 'enterstober enters ufatnai prufatenterbai';
mensajeTraducido = traducirMensaje(mensajeLiteral);
console.log(mensajeTraducido);

*/

