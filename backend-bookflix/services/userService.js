const { registrarUsuarioDB, comprobarUsuarioDB } = require('../modules/db/users');
const { encriptarPassword, desencriptarPassword } = require('../modules/encrypt_passwod');

async function registrarNuevoUsuario(nombre_user, email_user, password_user) {
    try{
        const password_encriptada = await encriptarPassword(password_user);
        await registrarUsuarioDB(nombre_user, email_user, password_encriptada);
    }catch (error){
        console.log("Hubo un problema al registrar el usuario");
        console.error(error);
    }
};

async function autentificarUsuario(email_user,  password_user) {

    try{
        const usuario = await comprobarUsuarioDB(email_user)
        if (usuario){
            const password_encriptada = usuario.password
            const comprobarPassword = await desencriptarPassword(password_encriptada, password_user);
            if (comprobarPassword){
                return usuario;
            }else{
                return false;
            }

        }else{
            return false;
        }

    }catch (error){
        console.error(error)
    }

};

module.exports = {
    registrarNuevoUsuario,
    autentificarUsuario
};