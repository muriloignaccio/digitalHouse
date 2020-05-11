const express = require('express');
const router = express.Router();
const PizzaController = require("../controllers/PizzaController");

router.get("/", PizzaController.index);
router.get("/name/:nome", PizzaController.showName);
router.get("/category/:categoria", PizzaController.showCategory);
router.get("/add", PizzaController.store);


module.exports = router;