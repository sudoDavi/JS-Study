"use strict";

var user = {
  nome: "Davi",
  idade: 18,
  endereco: {
    cidade: "Pelotas",
    uf: "RS"
  }
};

var mostraNome = function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return console.log(nome, idade);
};

mostraNome(user);
