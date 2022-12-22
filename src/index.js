const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 80 ;
const completeData = require('./../services/methods.services.js') ;
const testData = require('../dataTest/data.json');

app.use(express.json());
const resp = {
    "name": "Este es el nombre",
    "description": "prueba de JSON",
    "Array":[
        {
            "object1":"objeto1",
            "name":"nombre"
        },
        {
            "object2":"objeto2",
            "name":"nombre2"
        }
    ]
}
app.use(cors());

app.post('/test/',(req,res)=>{
    let parametro = req.body;
    let respuesta = completeData.analize(parametro);
    res.json(respuesta);
})

app.get('/respuesta',(req,res)=>{
    res.json(resp) ;
})
app.get('/',(req,res)=>{
    res.send("HOla");
})

app.listen(port,()=> {
    console.log(`Listen on port ${port}`)
})