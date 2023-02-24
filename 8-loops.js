console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const msg = console.log;
const idadeComprador = 18;
const estaAcompanhado = true;
const destino = "Rio de Janeiro";
let temPassagemComprada = false;
let destinoExiste = false;


msg("\nDestinos possíveis: ");
msg(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

// let contador = 0;

// while (contador < 3) {

//     if (listaDeDestinos[contador] == destino) {

//         destinoExiste = true;
//         break; // o Destino já foi achado e ele para o Loop.
//     }
//     contador ++;  // ou contador += 1;
// }

for ( let i = 0; i < 3; i++ ) {

    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    }
}

msg(`Destino Existente:  ${destinoExiste}`);


