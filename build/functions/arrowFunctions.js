"use strict";
const retornoAPI = (url) => {
    console.log('URL DA API: ', url);
};
retornoAPI("http://www.login.usuario");
const retornoBDConexao = (porta, url, usuario, banco) => {
    const usuarioAutenticado = 'Darlison';
    var resultado = false;
    if (porta == 5532 && url == 'localhost.127.0.0.1' && usuario == usuarioAutenticado && banco == 'Postegres') {
        resultado = true;
    }
    return resultado;
};
console.log('Usuario autenticado no banco de dados: ', retornoBDConexao(5532, 'localhost.127.0.0.1', 'Romeu', 'Postegres'));
