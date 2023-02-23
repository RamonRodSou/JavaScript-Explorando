console.log(`Trabalhando com listas`);

    // const salvador = `Salvador`;
    // const saoPaulo =`São Paulo`;
    // const rioDeJaneiro = `Rio de Janeiro`;

    // console.log("Destinos possíveis: ");
    // console.log(salvador, rioDeJaneiro, saoPaulo);

    //Array

    const listaDeDestinos = new Array (
        `Salvador`,
        `São Paulo`,
        `Rio de Janeiro`
        );

    listaDeDestinos.push (`Curitiba`); // Adiciona mais elementos na lista

    console.log("Destinos possíveis: ");
    console.log(listaDeDestinos);

   listaDeDestinos.splice(1,1);    // deleta um elemento da lista, colocamos a posição e a quantidade
   console.log(listaDeDestinos);


   console.log(listaDeDestinos[0]);  // vai mostrar apenas o elemento "0" da lista
   console.log(listaDeDestinos[1]);  // vai mostrar apenas o elemento "1" da lista
