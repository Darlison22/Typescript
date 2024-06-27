
/*
Forma tradicional de passar varios parametros para uma função

function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number): number {
    return venda1 + venda2 + venda3 + venda4;
}

let vendas:number = totalVendas(10,30,50,10);

console.log("Total de vendas: ", vendas);*/


//Melhor forma de passar varios parametros para uma função, quando não se sabe a quantidade de parametros que será passado
function totalVendas(...vendas: number[]): void {
    const quantidadeVendas = vendas.length;
    var totalVendas:number = 0;

    console.log('Voce fez', quantidadeVendas,'vendas hoje');

    vendas.forEach(venda => {
        totalVendas += venda;
    });


    console.log("O total de vendas foi de: $RS", totalVendas);



}

totalVendas(10, 30, 25, 100, 200, 300, 10, 10, 10);

function mostraNomes (...nomes: string[]): void {

    console.log("Total de pessoas:", nomes.length);
    nomes.map(nome => {
        console.log(nome);
    })
}

mostraNomes("Natan", "Lucas", "Sujeito");