const livros = require('./database')


//pegar o input

// Se for sim, mostra as categorias disponíveis, pergunta qual categoria ela escolhe 

// Se não, mostra os livros em ordem crescente pela quantidade de páginas

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
     console.log('Essas são as categorias disponíveis:')
     console.log("Américas", "Romance", "Suspense", "Aventura", "Terror", "Comédia")

     const entradaCategoria = readline.question('Qual categroaia você escolhe?')

     const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

     console.table(retorno)
}else {
     const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
     console.log('Essas sãos todas os livros disponíveis:')
     console.table(livrosOrdenados)
}
