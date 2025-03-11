let resposta = 0 
let numero = 1
let soma=0


while (numero <= 1000) {
if (numero % 5 === 0 && numero % 7 ===0) {
soma=soma + numero
} 
numero +=1
}

console.log (soma)