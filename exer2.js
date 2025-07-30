//Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da 
// frase e a mesma frase com letras maiúsculas.


const frase = 'Hello World!';
counter = 0;
for (let index = 0; index < frase.length; index++) {
    counter += 1;
}
console.log(`A frase tem ${counter} caracteres`);

//Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição 
// (resultando em undefined). Exiba os valores no console.

let teste = null;
let teste2
console.log(teste,teste2);

//Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados
//  (number, string, boolean) em uma única string e exiba o resultado no console.

const media = 8;
const aluno = 'Alessandro';
const Aprovado = true;


console.log(`O Aluno ${aluno} está com média ${media} então signfica que a aprovação é = ${Aprovado}`);


//Crie uma variável numérica e uma string. Faça a conversão da variável numérica
//  para string e da string para número. Exiba os tipos de dados resultantes no console.

const n1 = toString(8);
const str = Number.parseInt('19');


console.log(typeof n1);
console.log(typeof str);

//Crie uma variável com uma string e utilize métodos de manipulação de strings,
//  como toUpperCase, toLowerCase, slice ou outros, para modificar a string original.
//  Exiba os resultados finais no console.

const strg = 'Alessandro';


console.log(strg.toUpperCase());
console.log(strg.toLowerCase());
console.log(strg.slice());
console.log(strg.split(1));





