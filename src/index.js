const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 400 ;
const completeData = require('./../services/methods.services.js') ;
app.use(express.json());

app.use(cors());

app.post('/test/',(req,res)=>{
    let parametro = req.body;
    console.log(parametro);
    res.json(completeData.analize(parametro));
})

app.get('/',(req,res)=>{
    res.send("Hola");
})

app.listen(port,()=> {
    console.log(`Listen on port ${port}`)
})