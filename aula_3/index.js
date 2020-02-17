const PETSHOP = "Petshop DH";
console.log(`** ${PETSHOP} **`);
let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "vira-lata",
    idade: 2,
    genero: "M",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Lua",
    tipo: "gato",
    raca: "Siamês",
    idade: 8,
    genero: "F",
    vacinado: true,
    servicos: []
  },
  {
    nome: "Bill",
    tipo: "cão",
    raca: "Labrador",
    idade: 4,
    genero: "M",
    vacinado: true,
    servicos: []
  },
  {
    nome: "Gata",
    tipo: "gato",
    raca: "Singapura",
    idade: 3,
    genero: "F",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "vira-lata",
    idade: 3,
    genero: "M",
    vacinado: false,
    servicos: []
  }
];
const anoDeNascimento = pet => 2020 - pet.idade;
const vacinarPet = pet => {
  if(!pet.vacinado) {
    pet.vacinado = true;
    console.log(`${pet.nome} vacinad${pet.genero === "M"? "o" : "a"} com sucesso!`);
  }else{
    console.log(`Opa, ${pet.nome} já está vacinad${pet.genero === "M"? "o" : "a"}!`);
  }
}
const listarPets = () => {
  for(let pet of pets){
    //   console.log(`
    //   ---------------------
    //   Nome: ${pet.nome}
    //   Tipo: ${pet.tipo}
    //   Raça: ${pet.raca}
    //   Idade: ${pet.idade}
    //   Genero: ${pet.genero == "F" ? "Femea" : "Macho"}
    //   Vacinado: ${pet.vacinado ? "Sim" : "Não"}
    //   Serviços: ${pet.servicos === false ? "Nenhum" : pet.servicos}
    //   `)
  }
  pets.map(pet => {
      console.log("-------------");
      for(atributo in pet){
          console.log(`${atributo}: ${pet[atributo]}`)
      }
  })
}
listarPets();
let verificar = dadosPet => {
    switch(typeof dadosPet){
        case "object":
            return dadosPet.nome && dadosPet.raca && dadosPet.tipo && dadosPet.idade && dadosPet.genero;
            break;
        default:
            return false;
    }
}
const adicionarPet = novoPet => {
    if(verificar(novoPet)){
        novoPet.nome = String(novoPet.nome);
        novoPet.tipo = String(novoPet.tipo);
        novoPet.raca = String(novoPet.raca);
        novoPet.genero = String(novoPet.genero);
        novoPet.idade = Number(novoPet.idade);
        novoPet.vacinado ? "" : novoPet.vacinado = false;
        !novoPet.servicos ? novoPet.servicos = [] : "" ;
        pets.push(novoPet);
        console.log(novoPet.nome + " foi adicionado com sucesso!");
    }else{
        console.log("Dados enviados não são válidos!")
    }
}

const tosarPet = pet => {
    pet.servicos.push("tosa");
    console.log(`${pet.nome} foi tosadinho com sucesso!`);
}
const cortarUnhasPet = pet => {
    pet.servicos.push("corte de unhas");
    console.log(`${pet.nome} teve suas unhas cortadas com sucesso!`);
}
const darBanhoPet = pet => {
    pet.servicos.push("banho");
    console.log(`${pet.nome} foi banhado com sucesso!`);
}
const atenderPet = (pet, ...servicos) => {
    console.log(`Bem vindo ${pet.nome}!`);
    for(let servico of servicos){
        servico(pet);
    }
    const pagar = () => {console.log("Pagamento realizado com sucesso!")}
    pagar();
    console.log("Volte sempre!");
}
const contarVacinados = pets => {
    let vacinados = pets.filter(pet => pet.vacinado);
    let nVacinados = pets.filter(pet => !pet.vacinado);
    console.log(`Foram encontrados ${nVacinados.length} pets não vacinados`)
    console.log(`Foram encontrados ${vacinados.length} pets vacinados`);
    return nVacinados;
}

const campanhaVacina = () => {
    let nVacinados = contarVacinados(pets).map(vacinarPet);
    console.log(`${nVacinados.length} pets foram vacinados nessa campanha!`);
}
const buscarPetPeloNome = nome => pets.filter(pet => pet.nome === nome).pop();
// console.log(buscarPetPeloNome(""));