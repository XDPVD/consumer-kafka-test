const express = require('express');
const router = express.Router();

const Message = require('../models/Message');

router.get('/mensajes', async (req,res)=>{
    const messages = await Message.find();
    console.log(messages);
    res.render('mensajes');
});

router.post('/crearMensaje', async (req,res) => {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(200).send('ok');    
});
let obj = {
    firstName: {type: String, required: true},
    lastName: {type:String, required: true},
    dni: {type: Number},
    telephone: {type: Number},
    email: {type: String},
    content: {type: String},
    date: {type: Date, default: Date.now}
}
module.exports = router;