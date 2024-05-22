const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
require('dotenv').config();

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// RUTAS
const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);

// reescritura del historial
app.use(history());


// Sirve archivos estáticos
app.use(serveStatic(path.join(__dirname, '../bookflix-app/dist')));

// ruta de entrada para vue
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../bookflix-app/dist', 'index.html'));
  });

const port = process.env.PORT || 3000;

// Inicio del servidor
app.listen(port, () => {
    console.log(`Servidor en marcha en la ruta: http://localhost:${port}`);
    console.log(app.use(serveStatic(path.join(__dirname, '../bookflix-app/dist'))));
});