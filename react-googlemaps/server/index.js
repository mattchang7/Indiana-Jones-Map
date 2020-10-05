const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./db.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api'))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
})

const port = process.env.PORT || 8080;

db.sync() 
  .then(function(){
    app.listen(port, function () {
        console.log(`Your server, listening on port localhost:${port}`);
    })
})