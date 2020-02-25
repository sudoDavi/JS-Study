//REST

// const usuario = {
//     nome: "Davi",
//     idade: 23,
//     empresa: "Nenhuma",
//     instituicao: "IFSUL"
// };

// const { nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);


const soma = (a, b, ...params) => params;

console.log(soma(1, 3 ,4));


//SPREAD

const usuario = {
    nome: "Davi",
    idade: 23,
    empresa: "Nenhuma",
    instituicao: "IFSUL"
};

const usuario2 = { ...usuario, nome: "Alan"};

console.log(usuario2);

