switch(parametro){
 case valor1: 
     <bloco de declaracao>
     break
 case valor2:
     <bloco de declaracao>
     break
}

let nomeFilme = 'Vingadores'

switch(nomeFilme){
    case 'Vingadores':
        console.log('É o filme dos Vingadores')
        break
    case 'Batman vs Superman':
        console.log('É o filme do batman vs superman')
        break
    case 'Senhor dos aneis':
        console.log('É o filme do Senhor dos aneis')
        break
    default:
        console.log('É outro filme')
        break
}

let avaliacao = 3

switch(avaliacao){
    case 1:
    case 2:
        console.log('filme ruim')
        break
    case 3:
    case 4:
        console.log('filme mediano')
        break
    case 5:
        console.log('filme excelente')
        break
    default:
        console.log('nota inválida')
        break
}