const { response } = require('express')


const  usuariosGet = (req, res = response) => {
    const {q,nombre='No Name',apellidos,page=1,limit} = req.query
    //res.status(403).json({
    res.json({
        msg: 'get API - constrolador',
        q,
        nombre,
        apellidos,
        page,
        limit
    })
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad} = req.body
    //res.status(403).json({
    res.json({
        msg: 'post API - usuariosPost',
        nombre, 
        edad
    })
}

const usuariosPut = (req, res = response) => {
    const {id} = req.params
    //res.status(403).json({
    res.json({
        msg: 'put API - usuariosPut',
        id
    })
}




const usuariosDelete = (req, res = response) => {
    //res.status(403).json({
    res.json({
        msg: 'delete API - usuariosDelete'
    })
}


const usuariosPatch = (req, res = response) => {
    //res.status(403).json({
    res.json({
        msg: 'patch API - usuariosPatch'
    })
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}