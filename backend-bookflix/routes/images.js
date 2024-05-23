const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Ruta del archivo JSON
const perfiles = path.join(__dirname, '../data', 'perfiles.json');

router.get('/', (req, res) => {
    fs.readFile(perfiles, 'utf8', (err, data) => {
        if (err) {
            console.error('Error leyendo el archivo JSON:', err);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        try {
            const imagenes = JSON.parse(data);
            res.json(imagenes);
        } catch (error) {
            console.error('Error al analizar el JSON:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    });
});

module.exports = router;