

// Afirmando algum tipo.

let statusAtual: unknown = 1;
let mudaStatus: number = 0;



let valor10: any = "@@@";
let numero: boolean = valor10; //Não deveria dar um erro?
console.log(numero);


mudaStatus = statusAtual as number; //Avisa para a variavel mudaStatus que o valor que está sendo atribuido é um numero
console.log(mudaStatus)

mudaStatus = <number>statusAtual //Outra maneira de afirmar para a variavel que o valor atribuido é um number

let query: unknown = 'pizza';

let searchTerm: string = query as string;

console.log('Search term: ', searchTerm);