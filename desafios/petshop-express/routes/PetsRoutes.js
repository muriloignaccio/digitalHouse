const express = require("express");
const router = express.Router();
const PetController = require("../controllers/PetController");

router.get("/", PetController.index);
router.get("/add", PetController.store);
router.get("/buscar", PetController.show);
router.get("/campanha", PetController.vaccinate);
router.get("/atendimento", PetController.assist);

module.exports = router;