const bcrypt = require('bcryptjs');


async function encriptarPassword(password){
    try {
        const password_encrypt = await bcrypt.hash(password, 10);
        return password_encrypt
    }catch (error){
        console.log("Error al encriptar el password");
        console.error(error);
    }
}


async function desencriptarPassword(password_encriptada, password_user){
    try {
        console.log(password_encriptada)
        const comprobar_password = await bcrypt.compare(password_user, password_encriptada);
        console.log(comprobar_password)
            if(comprobar_password){
                return comprobar_password;
            }else{
                return false;
            }
    }catch (error){
        console.log("Error al desencriptar el password");
        console.error(error);
    }
}

module.exports = {
    encriptarPassword,
    desencriptarPassword
}