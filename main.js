let buttonCopy = document.getElementById("btnCopy");
let buttonEncrypt = document.getElementById("btnEncrypt");
let buttonDecrypt = document.getElementById("btnDecrypt");
let buttonClean = document.getElementById("btnClean");

const llaves ={
    e:"enter",
    i:"imes",
    a:"ai",
    o:"ober",
    u:"ufat"
}

function encrypt (text) {

    return text.replace(/[aeiou]/g, function(match){
        return llaves[match];
    });

}

function decrypt (text) {

    return text
                .replace(/enter/g,"e")
                .replace(/imes/g,"i")
                .replace(/ai/g,"a")
                .replace(/ober/g,"o")
                .replace(/ufat/g,"u");
            
}

function triggerEncrypt (){

    
    let input = document.getElementById("textareainput");
    let text = input.value;
    let output = document.getElementById("textareaoutput");




    
    if(text == ""){
        Swal.fire({
            icon: 'error',
            title: 'No hay ningun texto por encriptar',
        
        })
    }else{

        let resultEncrypt = encrypt(text);
        output.value = resultEncrypt;
            //ocultar elementos del DOM
        styles();
        
    }

}

function triggerDecrypt (){
    let input = document.getElementById("textareainput");
    let text = input.value;
    let output = document.getElementById("textareaoutput");

    if(text == ""){
        Swal.fire({
            icon: 'error',
            title: 'No hay ningun texto por desencriptar',
        
        })
    }else{

        let resultDecrypt = decrypt(text);
        output.value = resultDecrypt;

        styles();

    }

}
function copy(){
    let output = document.getElementById("textareaoutput");
    text = output.value;

    if (text == ""){
        alert("No hay nada por copiar")
    }else{
navigator.clipboard.writeText(text).then(()=>{
    Swal.fire({
        icon: 'success',
        title: 'Texto copiado en el portapapeles',
    
    })
    })
    .catch((error)=>{
        alert("No se ha copiado el texto",error);
    });
}
    }

    function clean(){
        let input = document.getElementById("textareainput");
        let output = document.getElementById("textareaoutput");
        input.value = "";
        output.value ="";
        document.getElementById("areaimg").style.display = 'block';
        document.getElementById("textinfo").style.display = 'block';
        document.getElementById("btnCopy").style.display = 'none';
        document.getElementById("textareaoutput").style.fontSize = "14px";

        Swal.fire({
            icon: 'success',
            title: 'hecho!',
            
        
        })
    }

    function styles(){
        document.getElementById("areaimg").style.display = 'none';
        document.getElementById("textinfo").style.display = 'none';
        document.getElementById("btnCopy").style.display = 'block';
        
    }


buttonCopy.addEventListener("click", copy);

buttonEncrypt.addEventListener("click", triggerEncrypt);

buttonDecrypt.addEventListener("click", triggerDecrypt);

buttonClean.addEventListener("click", clean);