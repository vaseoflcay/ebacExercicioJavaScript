const MDC = (a,b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

var lista_numeros=[1,65,3,4,-5,12,245,32,12,3,6];
        Array.min = function(array) {
            return Math.min.apply(Math, array);
        }
        
        Array.max = function(array) {
            return Math.max.apply(Math, array);
        };
        console.log(Array.min(lista_numeros));
        console.log(Array.max(lista_numeros));



const Multiplos = (c,d) => {
    
    let numero = 1
    let soma=0
        
    while (numero < 1000) {
    if (numero % c === 0 || numero % d ===0) {
    soma=soma + numero
     } 
    numero +=1
     }
return soma;

}

module.exports = {MDC,Multiplos}
