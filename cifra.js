let input = document.getElementById('input')
let cifra = document.getElementById('cifra')
let base64 = document.getElementById('base64')
let codificar = document.getElementById('codificar')
let decodificar = document.getElementById('decodificar')
let chave = document.getElementById('chave')
let botao = document.querySelector('button')


function cifrar(mensagem,chave) {
    let mensagemArray = mensagem.split('')
    let mesagemCodificada = []
    let arrayCodificador = []

    for (let i = 0; i < mensagemArray.length; i++) {
        if (mensagemArray[i].charCodeAt() >= 65 && mensagemArray[i].charCodeAt() <= 90){
            let valor = ((mensagemArray[i].charCodeAt()) - 65 + chave) % 26
            arrayCodificador.push(valor + 65)
        }
        else if (mensagemArray[i].charCodeAt() >= 97 && mensagemArray[i].charCodeAt() <= 122){
            let valor = ((mensagemArray[i].charCodeAt()) - 97 + chave) % 26
            arrayCodificador.push(valor + 65)
        }
        else{
            arrayCodificador.push(mesagemCodificada[i].charCodeAt())
        }
    }
    for (let i = 0; i < arrayCodificador.length; i++) {
        let element = arrayCodificador[i];
        mesagemCodificada.push(element)
    }
    return mesagemCodificada.join('')
}

function decifrar(mensagem,chave) {
    let mensagemArray = mensagem.split('')
    let mesagemCodificada = []
    let arrayCodificador = []

    for (let i = 0; i < mensagemArray.length; i++) {
        if (mensagemArray[i].charCodeAt() >= 65 && mensagemArray[i].charCodeAt() <= 90){
            let valor = ((mensagemArray[i].charCodeAt()) - 65 - chave) % 26
            arrayCodificador.push((valor < 0 ? valor + 26: valor)+ 65)
        }
        else if (mensagemArray[i].charCodeAt() >= 97 && mensagemArray[i].charCodeAt() <= 122){
            let valor = ((mensagemArray[i].charCodeAt()) - 97 - chave) % 26
            arrayCodificador.push((valor < 0 ? valor + 26: valor)+ 97)
        }
        else{
            arrayCodificador.push(mesagemCodificada[i].charCodeAt())
        }
    }
    for (let i = 0; i < arrayCodificador.length; i++) {
        let element = arrayCodificador[i];
        mesagemCodificada.push(element)
    }
    return mesagemCodificada.join('')
}

function base64Codifica(mensagem){
    let mensagemCodificada = btoa(mensagem)
    return mensagemCodificada
}

function base64Decodifica(mensagem){
    let mensagemDecodificada = atob(mensagem)
    return mensagemDecodificada
}