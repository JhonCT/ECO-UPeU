const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/findueco', async (req, res) => { 
    let nombres = req.query.nombres;        
    console.log(nombres);
     
    let persons = await Person.find({'nombres': {$regex: nombres}});    
    
    res.render('pdf', {
        persons
    });
});

router.get('/pdf', (req, res) => {
    res.render('pdf');
}); 

module.exports = router;