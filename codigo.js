const MDC = (a,b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const Multiplos = (c,d) => {

    let resposta = 0 
    let numero = 1
    let soma=0
    
    
    while (numero <= 1000) {
    if (numero % c === 0 && numero % d ===0) {
    soma=soma + numero
    } 
    numero +=1
    }
    
return soma;


}

module.exports = {MDC,Multiplos}