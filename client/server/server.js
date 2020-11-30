const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const mongoose = require('mongoose');





const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  mongoose.connect("mongodb+srv://donga:icu4ui4cu@cluster0.un7yq.mongodb.net/<dbname>?retryWrites=true&w=majority",{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology: true})
  
  const connection = mongoose.connection
  
  connection.once('open', () => {
      console.log('Database connection established');
  })

// add custom path here
const contactRouter = require('./routes/contacts');
server.use('/contacts', contactRouter);

// server.post('/request/custom', custom);

  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('Ready on http://localhost:3000')
  })
})