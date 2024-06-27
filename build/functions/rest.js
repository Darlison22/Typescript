"use strict";
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    var totalVendas = 0;
    console.log('Voce fez', quantidadeVendas, 'vendas hoje');
    vendas.forEach(venda => {
        totalVendas += venda;
    });
    console.log("O total de vendas foi de: $RS", totalVendas);
}
totalVendas(10, 30, 25, 100, 200, 300);
function mostraNomes(...nomes) {
    console.log("Total de pessoas:", nomes.length);
    nomes.map(nome => {
        console.log(nome);
    });
}
mostraNomes("Natan", "Lucas", "Sujeito");
