



function MDC(a,b){
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
    console.log(`o mdc de ${a} e ${b} ser: ${a}`)
}
