const Wform = require('../db/models/wform');

exports.getWform = (req,res)=>{
    Wform.find({}).then(wforms=>res.send(wforms)).catch((error)=>{
        console.log(error);
    });
}

exports.postWform = (req,res)=>{
    (new Wform({'fullname': req.body.fullname, 'number': req.body.number, 'email': req.body.email,
                 'business':req.body.business, 'description': req.body.description})).save().then((wform)=>{
                     res.send(wform);
  });
}