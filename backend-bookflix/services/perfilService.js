const {  getPerfilesDB, agregarPerfilDB, buscarPerfilDB, eliminarPerfilBD} = require('../modules/db/perfiles');


async function perfilesServicio(id_usuario){
    try{
        const perfiles = await getPerfilesDB(id_usuario)
        return perfiles;
    }catch(error){
        console.log(error)
    }
}

async function AgregarNuevoPerfil(nombre_perfil, imagen_perfil, id_usuario, id_perfil){
    try{
        const perfiles = await agregarPerfilDB(nombre_perfil, imagen_perfil, id_usuario, id_perfil)
        return perfiles;
    }catch(error){
        console.log(error)
    }
}

async function buscarPerfil(nombre_perfil, imagen_perfil, id_perfil){
    try{
        const resultado = await buscarPerfilDB(nombre_perfil, imagen_perfil, id_perfil)
        return resultado;
    }catch(error){
        console.log(error)
    }
}

async function eliminarPerfilUsuario(id_perfil){
    try{
        const resultado = await eliminarPerfilBD(id_perfil)
        return resultado;
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    perfilesServicio,
    AgregarNuevoPerfil,
    buscarPerfil,
    eliminarPerfilUsuario
}