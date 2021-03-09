var valores = [8, 7, 6, 5, 4, 3, 2, 1]

function ordena(){
    let inicio = 0// valor referente a posição na Array
    let fim =8 // valor referente a posição na Array
    let tmp;


    for(vezes=0; vezes < 8; vezes++){         // enquanto vezes for menor que 8 acrecenta-se uma repetição até comp. 8
    for (pos = inicio; pos < fim -1; pos++){ // em quanto a posição inicio for menor que a posição finla menos um 
       if (valores[pos]> valores[pos+1]){  // se aposição for maior que o seu próximo
        tmp = valores[pos]                 // tmp recebe o valor atual
        valores[pos]= valores[pos+1]           // o valor atual recebe o próximo 
        valores[pos+1]= tmp                // e valores pos mais um recebe tmp
       } 
    }    
}
}

ordena()
console.log("vetor ordenado")
console.log (valores)