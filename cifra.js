let input = document.getElementById('input')
let cifra = document.getElementById('cifra')
let base64 = document.getElementById('base64')
let codificar = document.getElementById('codificar')
let decodificar = document.getElementById('decodificar')
let chave = document.getElementById('chave')
let botao = document.querySelector('button')
let retorno = document.getElementById('retorno')
let escolhaChave = document.getElementById('escolhaChave')

cifra.addEventListener('click', ()=>{
    escolhaChave.style.display = 'flex'
    escolhaChave.style.flexDirection = 'column'
})

base64.addEventListener('click', ()=>{
    escolhaChave.style.display = 'none'
})

botao.addEventListener('click', ()=>{
    let paragrafo = ''
    if(codificar.checked){
        if(cifra.checked){
            paragrafo = cifrar(input.value,parseInt(chave.value))
        }
        if(base64.checked){
            paragrafo = base64Codifica(input.value)
        }
    }
    else if(decodificar.checked){
        if(cifra.checked){
            paragrafo = decifrar(input.value,parseInt(chave.value))
        }
        if(base64.checked){
            paragrafo = base64Decodifica(input.value)
        }
    }
    retorno.innerHTML = `<p>${paragrafo}</p>`
})

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
            arrayCodificador.push(valor + 97)
        }
        else{
            arrayCodificador.push(mesagemCodificada[i].charCodeAt())
        }
    }
    for (let j = 0; j < arrayCodificador.length; j++) {
        let element = String.fromCharCode(arrayCodificador[j]);
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
    for (let j = 0; j < arrayCodificador.length; j++) {
        let element = String.fromCharCode(arrayCodificador[j]);
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