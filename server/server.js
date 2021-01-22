require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//Parse x-www-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//Parse application/json
app.use(bodyParser.json());

app.get('/usuario', function(req, res){
    res.json('get Usuario');
});

app.post('/usuario', function(req, res){
    let body = req.body;

    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            message: 'El nombre es necesario'
        });
    } else{
        res.json({
            persona: body
        });
    }
});

app.put('/usuario/:id', function(req, res){
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res){
    res.json('delete');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto: ${process.env.PORT}`);
});