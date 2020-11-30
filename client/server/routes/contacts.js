const router = require('express').Router();
let Contact = require('../models/Contact');

router.route('/').get((req, res)=>{
    Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json('Error'+err));
});

router.route('/add').post((req, res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phone = Number(req.body.phone);
    const address = req.body.address;

    const newContact = new Contact({
        firstname, 
        lastname,
        phone, 
        address
    });

    newContact.save()
    .then(()=>res.json('Contact Added'))
    .catch(err => res.status(400).json('Error'+err));
});

module.exports = router