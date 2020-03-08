const PizzaModel = require("../model/PizzaModel");
const PedidoController = {
  index: (req, res) => {
		res.send(PizzaModel.listarPedidos());
	},
  store: (req, res) => {
		let { nome, pizzas } = req.query;
		pizzas = pizzas.split(",");
		res.send(PizzaModel.fazerPedido(nome, pizzas));
	}
};

module.exports = PedidoController;