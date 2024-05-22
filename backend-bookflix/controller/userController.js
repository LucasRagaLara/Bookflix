const { autentificarUsuario, registrarNuevoUsuario } = require('../services/userService');

async function registrar(req, res, next){
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


async function autentificar(req, res, next){

    try{
        const { email, password } = req.body;
        const comprobar = await autentificarUsuario(email,  password);
        if (comprobar){
            res.status(200).json({success: true, mensaje: 'Se ha autenticado correctamente'});
        }else {
            res.status(401).json({success: false, mensaje: 'Revisa tu email o contraseña'})
        }
    } catch(error){
        next(error);
    }

}



module.exports = {
    registrar,
    autentificar
}