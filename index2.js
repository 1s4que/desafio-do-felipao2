function calcularSaldoDeRankeadas(vitorias, derrotas) {
    
    return vitorias - derrotas;
}

let saldoVitorias = calcularSaldoDeRankeadas(108, 12)

let nivelDoHeroi = definirNivelDoHeroi(saldoVitorias)

function definirNivelDoHeroi(Nivel) {
    
    let oNivel = saldoVitorias
    if(oNivel < 10) {
        oNivel = "Ferro"
    } else if(oNivel >= 11 && oNivel <= 20) {
            oNivel = "Bronze"
    }   else if(oNivel >= 21 && oNivel <= 50) {
                 oNivel = "Prata"
    }     else if(oNivel >= 51 && oNivel <= 80) {
                      oNivel = "Ouro"
    }       else if(oNivel >= 81 && oNivel <= 90) {
                         oNivel = "Diamante"      
    }         else if(oNivel >= 91 && oNivel <= 100) {
                             oNivel = "Lendário" 
    }           else if(oNivel >= 101) {
                               oNivel = "Imortal"}
     return oNivel
}

console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível de ${nivelDoHeroi}`)