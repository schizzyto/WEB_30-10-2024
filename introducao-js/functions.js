//Função sem retorno
function inicio(){
    const mensagem = 'Estou iniciando...';
    console.log(mensagem)
}


//Função com retorno
function processa(){
    const mensagem = 'Estou processando...';
    return mensagem 
}


function run () {
    inicio();


    const resultado = processa();


    console.log(resultado);
}


run();