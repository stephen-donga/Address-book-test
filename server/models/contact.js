const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    firstname:{
        type: String,
         required: true,
         maxlength:20,
         trim: true
        },
        lastname:{
            type: String,
             required: true,
             maxlength:20,
             trim: true
            },
    phone: {
        type: Number,
         required: true,
        },
    address: {
        type: String,
         required: true, 
         maxlength:50,
         trim:true
        },
},{timestamps:true});

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;