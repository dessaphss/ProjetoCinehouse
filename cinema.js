let catalogo = require('./database/catalogo.json');
const fs = require('fs');


/*

// FUNÇÃO ADICIONAR FILME 
function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {
    const novoFilme = {
    codigo: codigo,
    titulo: titulo,
    duracao: duracao,
    atores: atores,
    anoDeLancamento: anoDeLancamento,
    emCartaz: emCartaz
    }
    catalogo.filmes.push(novoFilme)
    const json = JSON.stringify(catalogo)
    fs.writeFileSync('./database/catalogo.json', json);
};

// adicionarFilme(3, "Pantera Negra", 3, ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira"], 2020, true)
console.log(catalogo.filmes);

*/

// BUSCAR FILME 
// CÓDIGO I 
function buscarFilme (codigo){
    for (let i = 0; i < catalogo.filmes.length; i++) {
        if (catalogo.filmes[i].codigo === codigo){
            // return `Olá, usuário! O filme ${catalogo.filmes[i].titulo} está disponível.`
            console.log( `Olá, usuário! O filme ${catalogo.filmes[i].titulo} está disponível.`)
            return
        } 
    }
    //return `Olá, usuário! Infelizmente não temos esse filme.`
    console.log(`Olá, usuário! Infelizmente não temos esse filme.`) 
}

//console.log(buscarFilme(4))
buscarFilme(3) // ele não encontra o filme que foi adicionado



/*
// ALTERAR STATUS EM CARTAZ 
// CÓDIGO I

function alterarStatusEmCartaz (codigo){
    for (let i = 0; i < catalogo.filmes.length; i++){
        if (catalogo.filmes[i].codigo === codigo){
            catalogo.filmes[i].emCartaz = !catalogo.filmes[i].emCartaz
            console.log(catalogo.filmes[i])
        }
    }
}


alterarStatusEmCartaz(2)


// CÓDIGO II - TRAVEI NO IF ITERNÁRIO 

function alterarStatusEmCartaz = (codigo) => {
    for (let i = 0; < catalogo.filmes.lenght; i++){
        catalogo.filmes[i].codigo == codigo ? catalogo.filmes[i].emCartaz = !catalogo.filmes[i].emCartaz : '';    
    }
};

alterarStatusEmCartaz(2)

*/

/*
// LISTAR TODOS OS FILMES 
// A função deve percorrer toda a lista de filmes armazenada no catálogo utilizando o loop for e retornar as informações de maneira amigável ao usuário

function listarTodosOsFilmes (){
    for (let i = 0; i < catalogo.filmes.length; i++){
        console.log(catalogo.filmes[i])
        console.log(`Olá, usuário! Confira nosso catálogo ${catalogo.filmes[i].titulo}`) // verificar se esse console está correto
    }
}

listarTodosOsFilmes()


// LISTAR FILMES EM CARTAZ
function listarFilmesEmCartaz (){
    for (let i = 0; i < catalogo.filmes.length; i++){
        if (catalogo.filmes[i].emCartaz)
        console.log(catalogo.filmes[i]) // não deveria identificar somente o true?
    }
}

listarFilmesEmCartaz()
*/
