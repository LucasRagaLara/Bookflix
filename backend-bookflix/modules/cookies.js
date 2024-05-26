const jwt = require('jsonwebtoken');
require('dotenv').config();

function generarToken(idUsuario) {
    const token = jwt.sign({ id: idUsuario }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
    return token;
}

function decodificarToken(token){
    try{
        const id = jwt.verify(token, process.env.SECRET_TOKEN);
        return id;
    }catch(error){
        console.error("Error al verificar el token", error.message);
        return false;
    };
};

module.exports = {
    generarToken,
    decodificarToken
};