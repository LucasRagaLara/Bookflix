const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Ruta para el manejo de usuarios

router.post('/registrarse', userController.registrar);

router.post('/loguearse', userController.autentificar);

router.post('/forgot', userController.recuperar);

router.put('/cambiar/password/:id', userController.CambiarPassword);

module.exports = router;