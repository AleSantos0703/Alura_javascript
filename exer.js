//Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. 
//Em seguida, exiba o tipo de cada variável no console.


var nome = 'Alessandro';
var idade = 19;




if (idade > 18){

console.log("Maior de idade: ", idade);

} else {


    console.log("Menor de idade: ", idade);
}



//Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. 
//Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. 
//Por fim, imprima os resultados obtidos no console.


let primeiro_nome = 'Alessandro';
let sobrenome = 'dos Santos';

let nome_completo = primeiro_nome + ' ' + sobrenome;
console.log(nome_completo);


//Declare duas variáveis, uma contendo um número e outra contendo uma string. 
//Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

let saldo = 1000;
let frase = 'Seu saldo é: ';
let inteiro = frase + saldo;
console.log(inteiro);


//Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável.
//Imprima ambos os valores no console após atribuí-los.

var teste1 = 10;
console.log('Antes: ', teste1);


var teste1 = 15;
console.log('Depois: ', teste1);


//Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. 
//Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. 
//Faça o mesmo processo utilizando let e compare com os resultados anteriores

var foraDoBloco = 10;

if (true) {
    var dentroDoBloco = 20;
    console.log("Dentro do bloco com var:");
    console.log("foraDoBloco:", foraDoBloco);  // OK
    console.log("dentroDoBloco:", dentroDoBloco);  // OK
}

console.log("Fora do bloco com var:");
console.log("foraDoBloco:", foraDoBloco);  // OK
console.log("dentroDoBloco:", dentroDoBloco);  // Ainda acessível! (var ignora o bloco)


//let foraDoBloco = 10;

//if (true) {
   // let dentroDoBloco = 20;
   // console.log("Dentro do bloco com let:");
    //console.log("foraDoBloco:", foraDoBloco);  // OK
    //console.log("dentroDoBloco:", dentroDoBloco);  // OK
//}

//console.log("Fora do bloco com let:");
//console.log("foraDoBloco:", foraDoBloco);  // OK
//console.log("dentroDoBloco:", dentroDoBloco);  // ❌ Erro: not defined


//Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional 
//(if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.


var chuva = true;



if(chuva == true){


    console.log("Leve um guarda chuva está chovendo!");
}else{


    console.log("Não está chovendo aproveite o dia!");
}


