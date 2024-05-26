const { receptarMensajes } = require('../services/contactService');





async function recepcionController(req, res){

    try{
        const { tema, nombre, email, mensaje } = req.body;
        let nombre_user = nombre.trim();
        let mensaje_user = mensaje.trim();
        let email_user = email.trim();
        const recepcion = await receptarMensajes(tema, nombre_user, email_user,  mensaje_user);
        if (recepcion){
            res.status(200).json({success: true, mensaje: "Gracias por contactar con nosotros. En breve nos pondremos en contacto contigo."});
        }else {
            res.status(200).json({success: false, mensaje: "No se ha podido enviar el mensaje"})
        };
    } catch(error){
        res.status(401).json({success: false, mensaje: 'Hubo un problema con la recepción del mensaje'});
    };
};

module.exports = {
    recepcionController
};