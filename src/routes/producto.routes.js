const express = require("express");

const router = express.Router();

//Se importa el controlador
const productoController = require("../controllers/producto.controller.js");

//Se crean las rutas

router.get("/", productoController.index);

module.exports = router;
