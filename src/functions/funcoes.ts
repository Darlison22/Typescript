


/*function login(username: string): boolean | string {
    let message = "Bem vindo " + username;
    console.log(message)
    return username;
}

const resultado = login("Darlison");

console.log(resultado);*/

let n1: number = 10;
let n2: number = 5;

function soma(valor1: number, valor2: number): string{
    let soma = valor1 + valor2;
    if(soma > 20) {
        return 'soma maior que 20'
    } else {
        return 'soma menor que 20'
    }
}

var resultado;
console.log(resultado = soma(n1, n2));