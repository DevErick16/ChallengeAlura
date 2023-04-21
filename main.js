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
    text = input.value;
    let output = document.getElementById("textareaoutput");

    if(text == ""){
        alert("No hay ningun texto por Encriptar")
    }else{

        let resultEncrypt = encrypt(text);
        output.value = resultEncrypt;

    }

}

function triggerDecrypt (){
    let input = document.getElementById("textareainput");
    text = input.value;
    let output = document.getElementById("textareaoutput");

    if(text == ""){
        alert("No hay ningun texto por Desencriptar")
    }else{

        let resultDecrypt = decrypt(text);
        output.value = resultDecrypt;

    }

}

let buttonEncrypt = document.getElementById("btnEncrypt");
buttonEncrypt.onclick = triggerEncrypt;

let buttonDecrypt = document.getElementById("btnDecrypt");
buttonDecrypt.onclick = triggerDecrypt;