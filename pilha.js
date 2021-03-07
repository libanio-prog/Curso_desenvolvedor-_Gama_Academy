var elementos =[]
var topo = -1
const MAX = 10

function push(num){
 if (topo<MAX){
     topo = topo + 1
     elementos[topo] = num;
      }
    else {
        console.log("a pinhas está cheia ")
    }
}

function estaVazia(){
    return topo ===-1
}

function pop(){
    if (topo!=-1 ){// ou seja não está vazio
        let num = elementos[topo]
        topo = topo-1
        return num 
    }
    else {
        console.log("pilha está vazia ")
    }
}

var numeroDecimal = 10
var resto

console.log('Hora de empilhar!')
while (numeroDecimal !=0) {
    resto = parseInt (numeroDecimal %2)
    push (resto)
    console.log(resto)
    numeroDecimal= parseInt( numeroDecimal /2)
    }

    console.log('desempinhando tudo')
    while (!estaVazia()) {
        console.log(pop())
        
    }