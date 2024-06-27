

// Exemplo com arrow functions

/*
function retornoAPI(url: string): string {
    return url;
}
*/

const retornoAPI = (url:string): void => {
    console.log('URL DA API: ', url);
}

retornoAPI("http://www.login.usuario");


const retornoBDConexao = (porta: number, url: string, usuario: string, banco: string): boolean => {

    const usuarioAutenticado: string = 'Darlison';
    var resultado: boolean = false;
    if(porta == 5532 && url == 'localhost.127.0.0.1' && usuario == usuarioAutenticado && banco == 'Postegres'){
        resultado = true;
    } 

    return resultado;
}

console.log('Usuario autenticado no banco de dados: ',retornoBDConexao(5532, 'localhost.127.0.0.1', 'Romeu', 'Postegres'));