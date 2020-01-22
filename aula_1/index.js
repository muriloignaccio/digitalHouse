const PETSHOP = ["Petshop DH"];
// console.log("** " + PETSHOP + " **");
let nome = "Batman";
let tipo = "cão";
let raca = "vira-lata";
let idade = 7;
let genero = "Macho";
let servicos = ["Banho", "Tosa"];
let vacinado = true;
let pet = {
    nome: "Batman",
    tipo: "cão",
    raca: "vira-lata",
    idade: 2,
    genero: "F",
    servicos: ["Banho", "Tosa", "corte de unha"],
    vacinado: true
}
let pets = [{
    nome: "Nego",
    tipo: "cão",
    raca: "Pinscher",
    idade: 8,
    genero: "M",
    servicos: ["Banho", "Raspagem"],
    vacinado: false
},{
    nome: "Scooby",
    tipo: "cão",
    raca: "Pinscher",
    idade: 1,
    genero: "M",
    servicos: ["Banho", "corte de unha"],
    vacinado: false
},{
    nome: "Pitty",
    tipo: "cão",
    raca: "Shitzu",
    idade: 4,
    genero: "M",
    servicos: ["Banho", "Tosa"],
    vacinado: true
},{
    nome: "Rocky",
    tipo: "cão",
    raca: "Shitzu",
    idade: 2,
    genero: "M",
    servicos: ["Banho", "Tosa", "Operação"],
    vacinado: true
}]
function dataDeNascimento(pet){
    return 2020 - pet.idade;

}
function vacinacao(pet){
    let gender = pet.genero == "M" ? "O" : "A";
    if(!pet.vacinado){
        pet.vacinado = true;
        console.log(`${gender} ${pet.nome} foi vacinad${pet.genero == "F" ? "a" : "o"} com sucesso!`);
    }else{
        console.log(`${gender} ${pet.nome} já é vacinad${pet.genero == "F" ? "a" : "o"}!`);
    }
}
// for(let i = 0; i < 2; i++){
//     for(let j = 0; j < pets.length; j++){
//         vacinacao(pets[j]);
//     }
// }
// function mostraPets(){
//     console.log("Projeto Petshop")
//     for(let i = 0; i < pets.length; i++){
//         console.log("---------------")
//         console.log(`nome: ${pets[i].nome}`);
//         console.log(`raça: ${pets[i].raca}`);
//         console.log(`idade: ${pets[i].idade}`);
//         console.log(`gênero: ${pets[i].genero == "M" ? "Macho" : "Fêmea"}`);
//         console.log(`serviços: ${pets[i].servicos}`);
//         console.log(`tipo: ${pets[i].tipo}`);
//         console.log(`é vacinado: ${pets[i].vacinado ? "Sim" : "Não"}`);
//     }
// }
// mostraPets();
function listarPets(){
    let i = 0;
    while(i < pets.length){
        console.log("---------------")
        console.log(`nome: ${pets[i].nome}`);
        console.log(`raça: ${pets[i].raca}`);
        console.log(`idade: ${pets[i].idade}`);
        console.log(`gênero: ${pets[i].genero == "M" ? "Macho" : "Fêmea"}`);
        console.log(`serviços: ${pets[i].servicos}`);
        console.log(`tipo: ${pets[i].tipo}`);
        console.log(`é vacinado: ${pets[i].vacinado ? "Sim" : "Não"}`);
        i++;
    }
}
// listarPets();
function adicionarPets(pet){
    pets.push(pet);
    console.log(`${pet.nome} adicionad${pet.genero == "M" ? "o" : "a"} com sucesso!`);
}
// adicionarPets({
//     nome: "Mel",
//     tipo: "cão",
//     raca: "Poodle",
//     idade: 10,
//     genero: "F",
//     servicos: ["Tosa", "Psiquiatria"],
//     vacinado: false
// });
function adicionar(nome, tipo, raca, idade, genero, servicos, vacinado){
    pets.push({
        nome: nome,
        tipo: tipo,
        raca: raca,
        idade: idade,
        genero: genero,
        servicos: servicos,
        vacinado: vacinado
    })
    console.log(pets);
}
adicionar("Mel", "cão", "Poodle", 11, "M", ["Tosa"], true);