let pedidos = [
	{
		cliente: "Joao",
		pizza: ["Calabresa"],
		total: 10
	}
];

let pizzas = [
	{
		sabor: "Calabresa",
		categoria: "Salgada",
		preco: 10
	},
	{
		sabor: "Mussarela",
		categoria: "Salgada",
		preco: 12
	},
	{
		sabor: "Chocolate",
		categoria: "Doce",
		preco: 15
	},
	{
		sabor: "Brócolis",
		categoria: "Vegetariana",
		preco: 30
	}
];

const listarPizzas= () => {
	let conteudo = "";
	for (let pizza of pizzas) {
		conteudo += `
		<hr>
		Sabor: ${pizza.sabor} <br>
		Categoria: ${pizza.categoria} <br>
		Preço: ${pizza.preco} <br>
		<hr>`         
	};
	return conteudo;
};

const listarPedidos = () => {
	let conteudo = "";
	pedidos.forEach(pedido => {
		conteudo += `
		<hr>
		Nome do cliente: ${pedido.cliente} <br>
		Pizzas: ${pedido.pizza} <br>
		Valor total do pedido: ${pedido.total} <br>
		<hr>`;
	});
	return conteudo;
};

const verificarIgualdade = (texto1, texto2) => {
	return texto1.toLowerCase() === texto2.toLowerCase();
}

const buscarPizzaPorNome = (nomePizza, formatoObjeto = false) => {
	const pizzaBuscada = pizzas.find(pizza => {
		return verificarIgualdade(pizza.sabor, nomePizza)
	});
	if (pizzaBuscada) {
		if (!formatoObjeto) {
			return `
			<h1>Pizza de ${pizzaBuscada.sabor}</h1>
			<hr>
			<p>Pertence a categoria: ${pizzaBuscada.categoria}</p>
			<p>Tem o valor de: ${pizzaBuscada.preco} Reais.</p>
			<hr>
			`;
		} else {
			return pizzaBuscada;
		}
	} else {
		return `<p>Esse sabor de pizza não está presente no nosso cardápio :(</p>`;
	}
	
};

const buscarPizzaPorCategoria = categoria => {
	const pizzasBuscada = pizzas.filter(pizza => {
		return verificarIgualdade(pizza.categoria, categoria)
	});
	let conteudo = `<h1>Categoria ${categoria}</h1>`;
	for (let pizzaBuscada of pizzasBuscada) {
		conteudo += `
		<hr>
		<p>Pizza de ${pizzaBuscada.sabor} custa ${pizzaBuscada.preco} Reais.</p>
		<hr>`;
	}
	return conteudo; 
};

const calcularTotal = nomePizzas => {
	let total = 0;
	for (let nomePizza of nomePizzas) {
		let pizza = buscarPizzaPorNome(nomePizza.trim(), true);
		total += pizza.preco;
	}
	return total;
};

const fazerPedido = (nomeCliente, nomePizzas) => {
	const totalPizza = calcularTotal(nomePizzas);
	const pedido = {
		cliente: nomeCliente,
		pizza: nomePizzas,
		total: totalPizza
	};
	pedidos.push(pedido);
	return `${nomeCliente}, pedido realizado! O total é de ${totalPizza} Reais`;
};

const adicionarPizza = (sabor, categoria, preco) => {
	if (!buscarPizzaPorNome(sabor, true)) {
		const pizzaNova = {
			sabor,
			categoria,
			preco
		};
		pizzas.push(pizzaNova);
		return `Pizza de ${sabor} adicionada!`;
	}
	return `Pizza de ${sabor} já está presente no cardápio!`;
};

module.exports = {
	listarPizzas,
	listarPedidos,
	buscarPizzaPorNome,
	buscarPizzaPorCategoria,
	fazerPedido,
	adicionarPizza
}