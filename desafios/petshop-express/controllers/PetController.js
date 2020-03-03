const PetModel = require("../models/PetModel");

const PetController = {
  index: (req, res) => {
    const conteudo = PetModel.listarPets();
    if (conteudo.length > 0) {
      res.send(conteudo);
    } else {
      res.send("Nenhum pet cadastrado :(");
    }
  },
  store: (req, res) => {
    let novoPet = req.query;
    if (PetModel.adicionarPet(novoPet)) {
        res.send(`${novoPet.nome} foi adicionado com sucesso!`);
    } else {
        res.send("Ops, insira um argumento valido!");
    }
  },
  show: (req, res) => {
    let { nome } = req.query;
    let petEncontrado = PetModel.buscarPetPorNome(nome);
    if (petEncontrado.length > 0) {
      // res.json(petEncontrado);
      res.send(`<p>${petEncontrado.length} pets foram encontrados!</p>`);
    } else {
        res.send("Não foi encontrado nenhum pet");
    }
  },
  vaccinate: (req, res) => {
    res.write("<p>Campanha de vacina 2020!</p>");
    res.write(PetModel.contarVacinados());
    res.write("<p>Vacinando...</p>");
    res.write(PetModel.campanhaVacina());
    res.send();
  },
  assist: (req, res) => {
    let { nome, servicos } = req.query;
    servicos = servicos.split(",");
    res.write(`Bem vindo, ${nome}\n`);
    res.write(PetModel.atenderPet(nome, ...servicos));
    res.send();
  }
};

module.exports = PetController;