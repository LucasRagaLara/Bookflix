const { reenviarMensaje } = require('../modules/mails');


async function receptarMensajes(tema, nombre_user, email_user,  mensaje_user) {
    try{
        await reenviarMensaje(tema, nombre_user, email_user,  mensaje_user);
        if (reenviarMensaje){
            return true
        }else{
            return false
        };
    }catch (error){
        console.log("Hubo un problema al reenviar el usuario");
        console.error(error);
    };
};



module.exports = {
    receptarMensajes
};