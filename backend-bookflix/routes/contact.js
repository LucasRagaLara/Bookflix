const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

// Ruta para el manejo de usuarios

router.post('/recepcion', contactController.recepcionController);


module.exports = router;