function encriptar(){
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    var limite=texto.length-1


    if(texto==""){
        alert("por favor, ingrese un texto para poder encriptar.");
        document.getElementById("imagen").style.display = "flex";
        document.getElementById("titulo-tm").style.display = "flex";
        document.getElementById("subtitulo-tm").style.display = "flex";
        document.getElementById("resolucion").style.display="none";
        document.getElementById("copiar").style.display = "none";
                            
    }
    else{
        for (let x = -1; x < limite; x++) {

            var verificar=texto.codePointAt(texto.charAt(x))
            
            if (verificar>122||verificar<97) {
                alert("Por favor solo letras minusculas y sin acentos");
                break;
            }
            else{
                if(document.getElementById("inputTexto").value.startsWith(texto)==false){
                    alert("por favor solo letras minusculas y sin acentos");
                    break;
                }
                else{    
                    var txtCifrado=texto.replace(/e/igm, "enter");
                    var txtCifrado=txtCifrado.replace(/i/igm, "imes");
                    var txtCifrado=txtCifrado.replace(/a/igm, "ai");
                    var txtCifrado=txtCifrado.replace(/o/igm, "ober");
                    var txtCifrado=txtCifrado.replace(/u/igm, "ufat");
            
                    document.getElementById("imagen").style.display = "none";
                    document.getElementById("titulo-tm").style.display = "none";
                    document.getElementById("subtitulo-tm").style.display = "none";
                    document.getElementById("resolucion").style.display="flex";
                    document.getElementById("copiar").style.display = "flex";
                    document.getElementById("resolucion").innerHTML = txtCifrado;
                }
            } 
        }
    }
}





function desencriptar(){

    var texto= document.getElementById("inputTexto").value.toLowerCase();
    var limite=texto.length-1

    if(texto==""){
        alert("por favor, ingrese un texto para poder desencriptar.");
        document.getElementById("imagen").style.display = "flex";
        document.getElementById("titulo-tm").style.display = "flex";
        document.getElementById("subtitulo-tm").style.display = "flex";
        document.getElementById("resolucion").style.display="none";
        document.getElementById("copiar").style.display = "none";
    }
    else{
        for (let x = -1; x < limite; x++) {
            var verificar=texto.codePointAt(texto.charAt(x))
            
            
            if (verificar>122||verificar<97) {
                alert("Por favor solo letras minusculas y sin acentos");
                break;
            }
            else{
                if(document.getElementById("inputTexto").value.startsWith(texto)==false){
                    alert("por favor solo letras minusculas y sin acentos");
                    break;
                }
            
                else{
                    var txtCifrado=texto.replace(/enter/igm,"e");
                    var txtCifrado=txtCifrado.replace(/imes/igm,"i");
                    var txtCifrado=txtCifrado.replace(/ai/igm,"a");
                    var txtCifrado=txtCifrado.replace(/ober/igm,"o");
                    var txtCifrado=txtCifrado.replace(/ufat/igm,"u");

                    document.getElementById("imagen").style.display = "none";
                    document.getElementById("titulo-tm").style.display = "none";
                    document.getElementById("subtitulo-tm").style.display = "none";
                    document.getElementById("resolucion").style.display="flex";
                    document.getElementById("copiar").style.display = "flex";
                    document.getElementById("resolucion").innerHTML = txtCifrado;
                }
            }
        }
    }
    
}

function copiar(){
    var duplicar=document.querySelector("#resolucion");

    duplicar.select();
    document.execCommand("copy");
}