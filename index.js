function ocultar(){
    document.getElementById("imagen").style.display = "flex";
    document.getElementById("titulo-tm").style.display = "flex";
    document.getElementById("subtitulo-tm").style.display = "flex";
    document.getElementById("resolucion").style.display="none";
    document.getElementById("copiar").style.display = "none";
}
function mostrar(){
    document.getElementById("imagen").style.display = "none";
    document.getElementById("titulo-tm").style.display = "none";
    document.getElementById("subtitulo-tm").style.display = "none";
    document.getElementById("resolucion").style.display="flex";
    document.getElementById("copiar").style.display = "flex";          
}
function encriptar(){
    var texto= document.getElementById("inputTexto").value;
    var validador= texto.match(/^[a-z ]*$/);

    if(texto==""){
        alert("por favor, ingrese un texto para poder desencriptar.");
        ocultar();
    }
    else{
        if(!validador||validador===0){
            alert("por favor solo letras minusculas y sin acentos");
            ocultar();
            location.reload();
        
        }
        else{
            var txtCifrado=texto.replace(/e/igm, "enter");
            var txtCifrado=txtCifrado.replace(/i/igm, "imes");
            var txtCifrado=txtCifrado.replace(/a/igm, "ai");
            var txtCifrado=txtCifrado.replace(/o/igm, "ober");
            var txtCifrado=txtCifrado.replace(/u/igm, "ufat");

            document.getElementById("resolucion").innerHTML = txtCifrado;
            mostrar();
        }
    }
}
function desencriptar(){
    var texto= document.getElementById("inputTexto").value;
    var validador= texto.match(/^[a-z ]*$/);
    if(texto==""){
        alert("por favor, ingrese un texto para poder desencriptar.");
        ocultar();
        
    }
    else{
        if(!validador||validador===0){
            alert("por favor solo letras minusculas y sin acentos");
            ocultar();
            location.reload();
        }  
        else{
            var txtCifrado=texto.replace(/enter/igm,"e");
            var txtCifrado=txtCifrado.replace(/imes/igm,"i");
            var txtCifrado=txtCifrado.replace(/ai/igm,"a");
            var txtCifrado=txtCifrado.replace(/ober/igm,"o");
            var txtCifrado=txtCifrado.replace(/ufat/igm,"u");

            document.getElementById("resolucion").innerHTML = txtCifrado;
            mostrar();
        } 
    }
}
function copiar(){
    var duplicar=document.querySelector("#resolucion");
    duplicar.select();
    document.execCommand("copy");
}