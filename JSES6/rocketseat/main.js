const user = {
    nome: "Davi",
    idade: 18,
    endereco: {
        cidade: "Pelotas",
        uf: "RS",
    },
};

 const mostraNome = ({ nome, idade }) => (console.log(nome, idade));

 mostraNome(user);
