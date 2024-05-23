const iniciarDB = require('./init_db');

async function getPerfilesDB(id_usuario){
    try{
        const conectarDB = await iniciarDB();
        const [perfiles, cols] = await conectarDB.query('SELECT * FROM perfiles WHERE usuario_id = ?', [id_usuario]);
        if (perfiles && perfiles.length > 0){
            return perfiles
        } else{
            return []; 
        }
     } catch (error){
         console.error('Error al registrar usuario en la base de datos:', error);
         throw error;
     }
}

async function agregarPerfilDB(nombre_perfil, imagen_perfil, id_usuario, id_perfil){
    try{
        const conectarDB = await iniciarDB();
        // const [perfiles, cols] = await conectarDB.query('SELECT * FROM perfiles');
        const [comprobarSiExiste, cols] = await conectarDB.query("SELECT nombre, imagen from perfiles where id = ?", [id_perfil])
        console.log(comprobarSiExiste)
        if (comprobarSiExiste && comprobarSiExiste.length > 0){
            return false
        }else{
            await conectarDB.execute('INSERT INTO perfiles (nombre, imagen, usuario_id) VALUES (?, ?, ?)', [nombre_perfil, imagen_perfil, id_usuario]);
            return true
        }
     } catch (error){
         console.error('Error al registrar usuario en la base de datos:', error);
         throw error;
     }
}

async function buscarPerfilDB(nombre_perfil, imagen_perfil, id_perfil){
    try{
        const conectarDB = await iniciarDB();
        const [perfil_buscar, cols] = await conectarDB.query('SELECT * FROM perfiles WHERE id = ?', [id_perfil]);
        if (perfil_buscar && perfil_buscar.length > 0){
            await conectarDB.execute('UPDATE perfiles SET nombre = ?, imagen = ? WHERE id = ?',  [nombre_perfil, imagen_perfil, id_perfil]);
            return true;
        } else{
            return false;
        }
     } catch (error){
         console.error('Error al registrar usuario en la base de datos:', error);
         throw error;
     }
}

async function eliminarPerfilBD(id_perfil){
    try{
        const conectarDB = await iniciarDB();
        const [resultado] = await conectarDB.query('DELETE FROM perfiles WHERE id = ?', [id_perfil]);
        if (resultado.affectedRows === 0){
            return false
        }else{
            return true;
        }
     } catch (error){
         console.error('Error al registrar usuario en la base de datos:', error);
         throw error;
     }
}



module.exports = {
    getPerfilesDB,
    agregarPerfilDB,
    buscarPerfilDB,
    eliminarPerfilBD
}