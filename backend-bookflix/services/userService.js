const { registrarUsuarioDB, comprobarUsuarioDB, generarNuevaPasswordDB } = require('../modules/db/users');
const { encriptarPassword, desencriptarPassword } = require('../modules/encrypt_passwod');
const {generarToken } = require('../modules/cookies');
const {enviarMailRecuperacion} = require('../modules/mails');

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

async function recuperarPassword(email_user){
    try{
        const usuario = await comprobarUsuarioDB(email_user);
        if (usuario){
            const token = generarToken(usuario.id)
            await enviarMailRecuperacion(usuario, token);
            return true;
        }else{
            return false;
        };
    }catch (error){
        console.error(error)
    };
};

async function nuevaPassword(idUsuario, password_user){
    try{
        const password_encriptada = await encriptarPassword(password_user);
        const cambio = generarNuevaPasswordDB(idUsuario, password_encriptada);
        if (cambio){
            return true;
        }else{
            return false;
        };
    }catch (error){
        console.error(error)
    };
};

module.exports = {
    registrarNuevoUsuario,
    autentificarUsuario,
    recuperarPassword,
    nuevaPassword
};