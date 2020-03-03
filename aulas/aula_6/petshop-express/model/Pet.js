let pets = [{ nome: "doug" }, { nome: "costelinha" }];

const listarPets = () => {
  let conteudo = "";
  for (let pet of pets) {
    conteudo += `<h1 style="border: solid 5px red;margin: 10px;">Nome: ${pet.nome}</h1>`;
  }

  return conteudo;
};

const adicionarPet = novoPet => {
  return pets.push(novoPet);
};

const buscarPet = nomePet => {
  let petsEncontrados = pets.filter(pet => pet.nome == nomePet);

  return petsEncontrados;
};

module.exports = { listarPets, adicionarPet, buscarPet, pets };