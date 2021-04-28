const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose');
const cors = require('cors')
const app = express();
app.use(cors());
const path = require('path')

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')))
const wformRoute = require('./router/wform');

app.use('/api', wformRoute);
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(3000, (req,res)=>{
    console.log('connected to port 3000')
}) 