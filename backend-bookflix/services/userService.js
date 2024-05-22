const { registrarUsuarioDB } = require('../modules/db/users');
const { encriptarPassword } = require('../modules/encrypt_passwod');

async function registrarNuevoUsuario(nombre_user, email_user, password_user) {
    try{
        const password_encriptada = await encriptarPassword(password_user);
        await registrarUsuarioDB(nombre_user, email_user, password_encriptada);
    }catch (error){
        console.log("Hubo un problema al registrar el usuario");
        console.error(error);
    }
};

async function autentificarUsuario(nombre_user, email_user, password) {

    try{


    }catch (error){
        console.error(error)
    }

};

module.exports = {
    registrarNuevoUsuario,
    autentificarUsuario
};