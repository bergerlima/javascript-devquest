function calcularFatorial(numero){
    let resultado = 1;

    for(let i = 1; i <= numero; i++){
        resultado *= i;
    }

    return resultado;
}

function imprimirFatorial(numero) {

    if(numero >= 0){
        const fatorial = calcularFatorial(numero);
        console.log(`O fatorial de ${numero} é ${fatorial}`)
    } else {
        console.log("Não é possível calcular o fatorial e um número negativo.");        
    }
}

const numero = 5;
imprimirFatorial(numero);