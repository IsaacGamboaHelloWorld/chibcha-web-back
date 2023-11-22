import { Router } from "express";
import { login } from "./../controllers/login.controller.js";
import jwt  from 'jsonwebtoken';


const router = Router()

router.post('/login',login);

router.use((req,res,next)=>{
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        console.log('se recibe cabecera')
        req.token = bearerHeader
        next()
    }else{
        console.log('cabecera NO se recibio')
        res.sendStatus(403)
    }
})


router.use((req,res,next)=>{
    const token = req.token;
    jwt.verify(token,'secret_key',(err,data)=>{
        if(err){
            console.log('token invalido');
            res.sendStatus(403);
        }else{
            console.log('token valido');
            req.infoUser= data;
            next();
        }
    })
    
})





export default router