const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: process.env.MAIL_SMTP,
      pass: process.env.MAIL_PASS
    }
  });

async function reenviarMensaje(tema, nombre_user, email_user, mensaje_user){
    try{
        const configurarEmail = {
            from: process.env.MAIL_SMTP,
            to: process.env.MAIL_SMTP,
            subject: tema,
            text: `Nombre: ${nombre_user}\nCorreo: ${email_user}\nMensaje: ${mensaje_user}`
        };

        const comprobar = await transporter.sendMail(configurarEmail);

        if (comprobar.rejected.length === 0) {
            return true;
          } else {
            return false;
          };
    }catch(error){
        console.error("Hubo un error durante el envío del email", error);
        return false;
    };

};

async function enviarMailRecuperacion(usuario, token){
  try{
    const configurarEmail = {
        from: process.env.MAIL_SMTP,
        to: usuario.email,
        subject: "Recuperacion password",
        text: `Nombre: ${usuario.nombre !== undefined ? usuario.nombre : 'usuario'}\nHaga click en el siguiente enlace para recuperar su password:\nEnlace: http://localhost:3000/change-password/${token}`
    };

    const comprobar = await transporter.sendMail(configurarEmail);

    if (comprobar.rejected.length === 0) {
        return true;
      } else {
        return false;
      };
  }catch(error){
      console.error("Hubo un error durante el envío del email", error);
      return false;
  };
}



module.exports = {
    reenviarMensaje,
    enviarMailRecuperacion
};