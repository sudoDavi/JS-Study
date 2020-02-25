const usuarios = [  
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idade = usuarios.map(item => item.idade);
console.log(idade);

const funcRocket = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade >= 18);
console.log(funcRocket);

const funcGoogle = usuarios.find(item => item.empresa === 'Google');
console.log(funcGoogle);

const idadeX2 = usuarios.map(usuario => (
        {...usuario, idade: usuario.idade * 2})
    ).filter(usuario => usuario.idade <=50);
console.log(idadeX2);