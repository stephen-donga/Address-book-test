const router = require('express').Router();
let Contact = require('../models/Contact');

router.route('/').get((req, res)=>{
    Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json('Error'+err));
});

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const phone = Number(req.body.phone);
    const address = req.body.address;

    const newContact = new Contact({
        username, 
        phone, 
        address
    });

    newContact.save()
    .then(()=>res.json('Contact Adde'))
    .catch(err => res.status(400).json('Error'+err));
});

module.exports = router