const express = require("express");
const app = express();

const PizzaRoutes = require("./routes/PizzaRoutes");
const PedidoRoutes = require("./routes/PedidoRoutes");

app.use(express.json());

app.use("/pizzas", PizzaRoutes);
app.use("/pedidos", PedidoRoutes);

app.listen(3333);
