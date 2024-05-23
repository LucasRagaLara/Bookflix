const express = require('express');
const router = express.Router();
const {verificarPerfiles, agregarPerfil, editarPerfil, eliminarPerfil} = require('../controller/perfilController');

// Ruta para el manejo de usuarios

router.get('/:id', verificarPerfiles);

router.post('/agregar', agregarPerfil);

router.put('/editar/:id', editarPerfil);

router.delete('/eliminar/:id', eliminarPerfil);

module.exports = router;