const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const history = require('connect-history-api-fallback');
require('dotenv').config();

const app = express();

app.use(history());

app.use(serveStatic(path.join(__dirname, '../bookflix-app/dist')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor en marcha en la ruta: http://localhost:${port}`);
});