const PetModel = require("../model/Pet");
const PetController = {
    index: (req, res) => {
        res.send(PetModel.listarPets());
    },
    add: (req, res) => {
        console.log(PetModel.pets);
        PetModel.adicionarPet(req.params);
        res.send(`Adicionando ${req.params.nome}...`)
    },
    show: (req, res) => res.send("Aqui está!!!") 
};
module.exports = PetController;