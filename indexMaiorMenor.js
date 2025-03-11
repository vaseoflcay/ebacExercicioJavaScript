

Array.min = function(array) {
    return Math.min.apply(Math, array);
};

Array.max = function(array) {
    return Math.max.apply(Math, array);
};

 var lista_numeros=[1,65,3,4,-5,12,245,32,12,3,6];

console.log(Array.min(lista_numeros));
console.log(Array.max(lista_numeros));