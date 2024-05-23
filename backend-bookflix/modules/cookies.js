const jwt = require('jsonwebtoken');

function generarToken(idUsuario) {
    const token = jwt.sign({ id: idUsuario }, 'patata', { expiresIn: '1h' });
    return token;
}


module.exports = {
    generarToken
}