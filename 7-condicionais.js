console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const msg = console.log;
const idadeComprador = 18;
const estaAcompanhado = true;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {

//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1);  // Removendo o Item  1 da lista

// } else if (estaAcompanhado) {          // A Pessoa é menor de idade

//     console.log("Comprador esta acompanhado")
//     listaDeDestinos.splice(1, 1);  // Removendo o Item  1 da lista
// } else {

//     console.log("Comprador não tem idade suficiente")
// }

    // console.log(idadeComprador > 18);
    // console.log(idadeComprador < 18);
    // console.log(idadeComprador >= 18);
    // console.log(idadeComprador >= 18);
    // console.log(idadeComprador == 18); 



if (idadeComprador >= 18 || estaAcompanhado == true) {

    console.log("Boa viagem")
    listaDeDestinos.splice(2, 1);  // Removendo o Item  1 da lista
} else {

    msg("Comprador não tem idade suficiente")
}

msg("Embarque: \n\n")

if (idadeComprador >= 18 && temPassagemComprada) {

    msg("Boa Viagem")
}else {

    msg("Você não pode embarcar")
}


console.log(listaDeDestinos);



