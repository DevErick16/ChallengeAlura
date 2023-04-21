const llaves = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
}

function encriptar (texto){

    return replace(/[aeiou]/g, function(match){
        return llaves[match]
    });

}

function desencriptar (texto){

    return replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u")

}