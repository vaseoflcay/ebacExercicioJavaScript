const {MDC,Multiplos} = require('./codigo')

describe('funcoes matematicas', () => {
     it('MDC de dois valores', () => {
        expect(MDC(12,18)).toBe(6)
     });  

     it('maior e menor valor de um array', () => {
        var lista_numeros=[1,65,3,4,-5,12,245,32,12,3,6];
        Array.min = function(array) {
            return Math.min.apply(Math, array);
        };
        
        Array.max = function(array) {
            return Math.max.apply(Math, array);
        };
        console.log(Array.min(lista_numeros));
        console.log(Array.max(lista_numeros));
     });

     it('soma dos multiplos de 5 e 7 menores que 1000', () => {
        expect(Multiplos(7,5)).toBe(14210)
     });

});