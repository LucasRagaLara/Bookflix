const iniciarDB = require('./init_db');

async function registrarUsuarioDB(nombre_user, email_user, password_encriptada){
    try{
       const conectarDB = await iniciarDB();
        await conectarDB.execute('INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)', [nombre_user, email_user, password_encriptada])
    } catch (error){
        console.error('Error al registrar usuario en la base de datos:', error);
        throw error;
    }
}



module.exports = {
    registrarUsuarioDB
}