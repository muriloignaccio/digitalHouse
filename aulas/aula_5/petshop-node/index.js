const http = require("http");
const petshop = require("./petshop");
const url = require("url");
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain; charset=UTF-8"})
    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query;
    let caminho = urlCompleta.pathname;
    switch (caminho) {
        case "/pets":
            let conteudo = petshop.listarPets();
            conteudo.length > 0 ? res.write(conteudo) : res.write("Nenhum pet cadastrado :(")
            break;
        case "/pets/add":
            let novoPet = queryString;
            if (petshop.adicionarPet(novoPet)) {
                res.write(`${novoPet.nome} foi adicionado com sucesso!`);
            } else {
                res.write("Ops, insira um argumento valido!");
            }
            break;
        case "/pets/buscar":
            let { nome } = queryString;
            let petEncontrado = petshop.buscarPetPorNome(nome);
            if (petEncontrado.length == 1) {
                // res.write(`Foi encontrado ${petEncontrado.length} pets`);
                res.write(JSON.stringify(petEncontrado.pop()));
            } else if (petEncontrado.length > 1){
                res.write(JSON.stringify(petEncontrado));
                res.write(`\n${petEncontrado.length} pets foram encontrados!`);
            } 
            else {
                res.write("Não foi encontrado nenhum pet");
            }
            break;
        case "/pets/campanha":
            res.write("Campanha de vacina 2020!");
            res.write(petshop.contarVacinados());
            res.write("Vacinando...\n");
            res.write(petshop.campanhaVacina());
            break;
        case "/pets/atendimento":
            let { nome: nomePet, servicos } = queryString;
            servicos = servicos.split(",");
            res.write(`Bem vindo, ${nomePet}\n`);
            res.write(petshop.atenderPet(nomePet, ...servicos));
            break;
        default:
            res.write("to perdido me ajuda pfvr");
    }
    res.end();
}).listen(3000, () => console.log("Servidor rodando"));