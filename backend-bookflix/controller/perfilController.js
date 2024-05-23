const { perfilesServicio, AgregarNuevoPerfil, buscarPerfil, eliminarPerfilUsuario} = require('../services/perfilService');

async function verificarPerfiles(req, res){
    try{
        const id_usuario = req.params.id;
        const perfiles = await perfilesServicio(id_usuario)
        console.log(perfiles)
        res.status(200).json({perfiles: perfiles});
    } catch(error){
        res.status(500).json({success: false, mensaje: 'No se ha podido registrar'});
    }
}

async function agregarPerfil(req, res){
    try{
        const {nombre, imagen, id_usuario, id_perfil} = req.body 
        let nombre_perfil = nombre.trim();
        let imagen_perfil = imagen.trim();
        console.log(nombre_perfil, imagen_perfil, id_usuario, id_perfil)
        const perfiles = await AgregarNuevoPerfil(nombre_perfil, imagen_perfil, id_usuario, id_perfil)
        if (perfiles){
            res.status(200).json({success: true, data: perfiles});
        }else{
            res.status(200).json({success: false, mensaje: "El perfil ya existe en la base de datos"});
        }
        console.log(perfiles)
    } catch(error){
        res.status(500).json({success: false, mensaje: 'No se ha podido registrar'});
    }
}

async function editarPerfil(req, res){
    try{
        const id_perfil = req.params.id;
        const {nombre, imagen} = req.body;
        let nombre_perfil = nombre.trim();
        let imagen_perfil = imagen.trim();
        const actualizar_perfil = await buscarPerfil(nombre_perfil, imagen_perfil, id_perfil)
        
        if (actualizar_perfil){
            res.status(200).json({success: true, mensaje: "Perfil actualizado con éxito"});
        }else{
            res.status(200).json({success: false, mensaje: "No se ha podido actualizar el perfil"});
        }
    } catch(error){
        res.status(500).json({success: false, mensaje: 'No se ha podido actualizar el perfil'});
    }
}


async function eliminarPerfil(req, res){
    try{
        const id_perfil = req.params.id;
        const eliminar = await eliminarPerfilUsuario(id_perfil)
        
        if (eliminar){
            res.status(200).json({success: true, mensaje: "Perfil eliminado con éxito"});
        }else{
            res.status(200).json({success: false, mensaje: "No se ha podido eliminar el perfil"});
        }
    } catch(error){
        res.status(500).json({success: false, mensaje: 'No se ha podido eliminar el perfil'});
    }
}

module.exports = {
    verificarPerfiles,
    agregarPerfil,
    editarPerfil,
    eliminarPerfil
}