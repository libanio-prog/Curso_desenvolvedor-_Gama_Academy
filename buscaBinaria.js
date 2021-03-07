var valores=[5, 8, 10, 22, 38, 45, 60, 90, 100, 120]

function busca (num){
for(i=0; i<6 ; i++){
if (num == valores[i]){
    return i
}
}
return -1
}

function buscaBin (num){
    let inicio, fim;
    let meio;
    let passos =0
    inicio = 0
    fim = 9
    while (inicio<= fim ) {
        meio= parseInt( (inicio + fim)/2) // operação para encontrar o meio da array e o parseInt é usado para forçar o resultado inteiro 
        passos = passos +1// isso pq a cada divisão vamos acrescentar um passo
        if (num == valores [meio]){
            console.log( `achei em ${passos} passos`)
            return meio
        }
        else{
            if (num > valores[meio]){// se o numero é maior que os numeros na posição do meio
                inicio=meio+1// meio inicio vale meio mais 1 e o fim permanece igual
            }
            else{
                fim = meio -1 // então o meio é meio menos um e eu permaneço com o inicio 
            }
        }
    }
    console.log(`Não achei em ${passos} passos`)
    return -1
}

console.log (buscaBin(10))
console.log (buscaBin(60))
console.log (buscaBin(50))// não vai encontrar e vai retornar -1