//Exercicio 1
function maiorNumero(...valor : number[]):number {
    let maior : number = 0;
    for(let i = 0; i < valor.length; i++) {
        if(valor[i] > maior) {
            maior = valor[i];
        }
    }

    return maior;
}
console.log("\nEXERCÍCIO 1:")
console.log(maiorNumero(11,13,15,1005,98,17));

// --------------------

//Exercicio 2
function parImpar(valor:number) : boolean {
    if(valor % 2 == 0)
        return true;
    return false;
}
console.log("\nEXERCÍCiO 2")
if(parImpar(79))
    console.log("É Par");
else
    console.log("É Impar");

// --------------------
//Exercicio 3
function mediaConjunto(...conjunto:number[]):number {
    let soma : number = 0;
    
    for(let i = 0; i < conjunto.length; i++) {
        soma += conjunto[i];
    }
    
    let media : number = soma / conjunto.length;
    return media;
}
console.log("\nEXERCÍCIO 3")
console.log(mediaConjunto(2,8,8,78,100).toFixed(2));
console.log(mediaConjunto(5,6,1,2,5,6,8,9,10).toFixed(2));
console.log(mediaConjunto(0,9,1,2,3,4).toFixed(2));
console.log(mediaConjunto(8,8,8,88,8,99).toFixed(2));
console.log(mediaConjunto(2,1,1,34,544,165).toFixed(2));
console.log(mediaConjunto(1,2,3).toFixed(2));

// --------------------
//Exercicio 4
function maiuscula(n:string):string {
    return n.toUpperCase();
}
console.log("\nEXERCÍCIO 4")
console.log(maiuscula('jose'));
console.log(maiuscula('analise de desenvolvimento de sistemas'));
console.log(maiuscula('lista'));

// --------------------
//Exercicio 5
function primo(valor:number):boolean {
    let i : number;
    let cont : number = 0;
        for(i = 2; i <= valor; i++) {
            if(valor % i == 0)
                cont++;
        }
        if(cont>2)
            return false;
        else
            return true;
    
    
}
console.log("\nEXERCÍCIO 5")
console.log(primo(7));
console.log(primo(5));


// --------------------
//Exercicio 6
function inverteArray(...array:any):any {   
    let novoArray:any[] = [];
    
    for(let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i]);
    }

    return novoArray;
}

console.log(inverteArray(5,4,3,2,1));

// --------------------
//Exercicio 7
function aumento(n : number, porcentagem : number) : number {
    return n * (1 + (porcentagem / 100));
}

console.log("EXERCÍCIO 7");
console.log(aumento(1000,30));


// --------------------
//Exercicio 8
function inverteString(string:string): string {
    let letras:string[] = string.split("");
    let invertido:string = letras.reverse().join("");
    return invertido;
  }
  
  console.log("EXERCÍCIO 8");
  console.log(inverteString('Analise e desenvolvimento de sistemas'));


// --------------------
//Exercicio 9
  function returnSomaPar(...conjunto:number[]):number {
    let soma:number = 0;
    
    for(let i = 0; i < conjunto.length; i++) {
        if(conjunto[i] % 2 == 0) {
            soma += conjunto[i];   
        }
    }
    return soma;
}
console.log("EXERCÍCIO 9");
console.log(returnSomaPar(1,2,6,3,8,10));


// --------------------
//Exercicio 10
function fatorial(n:number):number {
    let fatorial:number = 1;

    for(let i = 0; i < n; i++ ) {
        fatorial *= (n-i);
    }

    return fatorial;
}

console.log(fatorial(8));
console.log(fatorial(3));
console.log(fatorial(2));
console.log(fatorial(5));
