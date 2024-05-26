const iniciarDB = require('./init_db');

async function registrarUsuarioDB(nombre_user, email_user, password_encriptada){
    try{
       const conectarDB = await iniciarDB();
        await conectarDB.execute('INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)', [nombre_user, email_user, password_encriptada])
    } catch (error){
        console.error('Error al registrar usuario en la base de datos:', error);
        return false;
    }
}

async function comprobarUsuarioDB(email_user){
    try{
       const conectarDB = await iniciarDB();
        const [rows, col] = await conectarDB.query('SELECT id, email, password FROM usuarios WHERE email = ?', [email_user]);
        console.log(rows)
        if (rows && rows.length > 0){
            return rows[0];
        } else {
            return false
        }
    } catch (error){
        console.error('Error al registrar usuario en la base de datos:', error);
        return false;
    }
}

async function generarNuevaPasswordDB(idUsuario, password_user){
    try{
        const conectarDB = await iniciarDB();
        const [rows, col] = await conectarDB.execute('UPDATE usuarios SET password = ? WHERE id = ?', [password_user, idUsuario])
        if (rows.affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }catch(error){
        console.error('Error al registrar usuario en la base de datos:', error);
        return false;
    }
}

module.exports = {
    registrarUsuarioDB,
    comprobarUsuarioDB,
    generarNuevaPasswordDB
}