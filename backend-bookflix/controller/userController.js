const { autentificarUsuario, registrarNuevoUsuario } = require('../services/userService');
const {generarToken } = require('../modules/cookies');

async function registrar(req, res){
    try{
        const { nombre, email, password } = req.body;
        let nombre_user = nombre.trim();
        let email_user = email.trim();
        let password_user = password.trim();
        console.log(nombre_user, email_user, password_user)
        await registrarNuevoUsuario(nombre_user, email_user, password_user)
        res.status(200).json({success: true, mensaje: 'Se ha registrado correctamente'});
    } catch(error){
        res.status(500).json({success: false, mensaje: 'No se ha podido registrar'});
    }
}


async function autentificar(req, res){

    try{
        const { email, password } = req.body;
        let password_user = password.trim();
        let email_user = email.trim();
        const usuario = await autentificarUsuario(email_user,  password_user);
        if (usuario){
            const token = generarToken(usuario.id);
            res.status(200).json({success: true, mensaje: {token: token, id:  usuario.id}});
        }else {
            res.status(200).json({success: false, mensaje: 'Revisa tu email o contraseña'})
        }
    } catch(error){
        res.status(401).json({success: false, mensaje: 'No se ha podido loguear'});
    }
}

module.exports = {
    registrar,
    autentificar
}