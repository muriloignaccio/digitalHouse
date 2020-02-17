let pets = [{nome: "Nego"}, {nome: "Fezes"}];
let listarPets = () => {
    let conteudo = "";
    pets.forEach(pet => {
        conteudo += `
        ----------
        Nome: ${pet.nome}
        ----------
        `;
    })
    return conteudo;
}
const adicionarPet = novoPet => pets.push(novoPet);
const buscar = nomePet => pets.filter(pet => pet.nome == nomePet);  
module.exports = {listarPets, adicionarPet, buscar};