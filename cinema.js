let catalogo = require('./database/catalogo.json');
const fs = require('fs');

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


// BUSCAR FILME 
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
buscarFilme(4) // 



// ALTERAR STATUS EM CARTAZ 
// CÓDIGO I

function alterarStatusEmCartaz (codigo){
    for (let i = 0; i < catalogo.filmes.length; i++){
        if (catalogo.filmes[i].codigo === codigo){
                catalogo.filmes[i].emCartaz = !catalogo.filmes[i].emCartaz
                console.log(catalogo.filmes[i])
        }
    }
};

alterarStatusEmCartaz(2)



// CÓDIGO II - IF ITERNÁRIO 

const alterarStatusEmCartaz = codigo => {
    for (let i = 0; i < catalogo.filmes.length; i++){
        catalogo.filmes[i].codigo == codigo ? catalogo.filmes[i].emCartaz = !catalogo.filmes[i].emCartaz : '';    
    }
};

console.log(catalogo.filmes[1])
alterarStatusEmCartaz(2)
console.log(catalogo.filmes[1])

// LISTAR TODOS OS FILMES 

function listarTodosOsFilmes (){
    for (let i = 0; i < catalogo.filmes.length; i++){
        console.log(catalogo.filmes[i])
    }
}

listarTodosOsFilmes()


// LISTAR FILMES EM CARTAZ
function listarFilmesEmCartaz (){
    for (let i = 0; i < catalogo.filmes.length; i++){
        if (catalogo.filmes[i].emCartaz)
        console.log(catalogo.filmes[i])
    }
}

listarFilmesEmCartaz()

