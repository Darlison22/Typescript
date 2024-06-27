

//Como deixar um valor por default ou deixar ele opcional

function cadastro (email: string, senha: string, nome = "Aluno", idade?: number): void { 
    //O parametro com?: se torna opcional. Caso não seja passado, a função assume 
    // o parametro como undefined
    
    let data = {
        email,
        senha,
        nome,
        idade
    };

    console.log(data);
}

//cadastro('teste@teste.com', '123123', "Sujeito programador", 28);

function cadastroLoja(nome: string, email: string, status = false): boolean {
    console.log("Status atual da loja: ", status);
    return status;
}

cadastroLoja("Buruger K", 'bk@teste.com', true); //O ultimo atributo é opcional, se não for passado nada, a função assume o status como false