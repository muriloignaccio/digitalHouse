const PizzaModel = require("../model/PizzaModel");
const pizzaController = {
	index: (req, res) => {
		res.send(PizzaModel.listarPizzas());
	},
	showName: (req, res) => {
		const { nome } = req.params;
		res.send(PizzaModel.buscarPizzaPorNome(nome));
	},
	showCategory: (req, res) => {
		const { categoria } = req.params;
		res.send(PizzaModel.buscarPizzaPorCategoria(categoria));
	},
	store: (req, res) => {
		const { nome, categoria, preco } = req.query;
		res.send(PizzaModel.adicionarPizza(nome, categoria, preco));
	}
};

module.exports = pizzaController;