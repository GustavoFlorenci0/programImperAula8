
function podeSubir(altura, acompanhante) {
    let podeSubir = false

    if (altura>=1.40 && altura <=2.00 ) {        
        return podeSubir = 'Acesso liberado';
    } else if ( altura > 1.20 && acompanhante == true) {
        return podeSubir = 'Acesso só com acompanhante';
    } else return podeSubir= ' Acesso negado ';    
}

let dados = podeSubir(1.5, 1)

console.log(dados);