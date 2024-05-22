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


async function desencriptarPassword(password){
    try {
        // const password_encrypt = await bcrypt.hash(password, 10);
    }catch (error){
        console.log("Error al desencriptar el password");
        console.error(error);
    }
}

module.exports = {
    encriptarPassword,
    desencriptarPassword
}