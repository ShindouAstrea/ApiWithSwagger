const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 400 ;
const completeData = require('./../services/methods.services.js') ;
app.use(express.json());

app.use(cors());

app.post('/',(req,res)=>{
    let parametro = req.body;
    console.log(parametro);
    res.json(completeData.analize(parametro));
})

app.get('/',(req,res)=>{
    res.send("Debes hacer post a esta misma ruta enviando en el cuerpo la estructura detallada en el Readme del proyecto.");
})

app.listen(port,()=> {
    console.log(`Listen on port ${port}`)
})
