const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Ruta para el registro de usuarios

router.post('/registrarse', userController.registrar);

router.post('/loguearse', userController.autentificar);

module.exports = router;