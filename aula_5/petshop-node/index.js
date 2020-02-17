const http = require("http");
const petshop = require("./petshop");
const url = require("url");
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain; charset=UTF-8"})
    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query;
    let caminho = urlCompleta.pathname;
    switch(caminho){
        case "/pets":
            let conteudo = petshop.listarPets();
            conteudo.length > 0 ? res.write(conteudo) : res.write("Nenhum pet cadastrado :(")
            break;
        case "/pets/add":
            let novoPet = queryString;
            if(petshop.adicionarPet(novoPet)){
                res.write(`${novoPet.nome} foi adicionado com sucesso!`);
            }else{
                res.write("deu errado");
            }
            break;
        case "/pets/buscar":
            let nomePet = queryString.nome;
            let petEncontrado = petshop.buscar(nomePet);
            petEncontrado.length > 0 ? res.write(`Foi encontrado ${petEncontrado.length} pets`) : res.write("Não foi encontrado nenhum pet");
            break;
        default:
            res.write("to perdido me ajuda pfvr");
    }
    res.end();
}).listen(3000, "localhost", () => console.log("Servidor rodando"));