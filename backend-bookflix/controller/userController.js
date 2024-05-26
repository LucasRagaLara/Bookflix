const { autentificarUsuario, registrarNuevoUsuario, recuperarPassword, nuevaPassword  } = require('../services/userService');
const {generarToken, decodificarToken } = require('../modules/cookies');

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

async function recuperar(req, res){
    try{
        const { email } = req.body;
        let email_user = email.trim();
        const reenvio = await recuperarPassword(email_user);
        if (reenvio){
            res.status(200).json({success: true, mensaje: "Revise su bandeja de entrada"});
        }else{
            res.status(200).json({success: true, mensaje: "Revise su bandeja de entrada"});
        };

    }catch(error){
        console.error(error);
    };
};

async function CambiarPassword(req, res){
    try{
        const { password } = req.body;
        let password_user = password.trim();
        let token = req.params.id;
        let decodificar_token = await decodificarToken(token);

        if (decodificar_token && decodificar_token.id){

            const idUsuario = decodificar_token.id;
            const cambiar_password = await nuevaPassword(idUsuario, password_user);

            if (cambiar_password){
                res.status(200).json({success: true, mensaje: "Contraseña cambiada correctamente"});
            }else{
                res.status(200).json({success: false, mensaje: "Hubo un problema. Intentelo de nuevo más tarde."})
            }

        }else{
            res.status(200).json({success: false, mensaje: "El token ha caducado"});
        }
      
    }catch(error){
        console.error(error);
    };
}

module.exports = {
    registrar,
    autentificar,
    recuperar,
    CambiarPassword
}