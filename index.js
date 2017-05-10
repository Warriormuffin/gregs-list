var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var server = express()
var port = 3000
var routes = require('./server-assets/routes')

var mongoose = require('mongoose')
var connectionString = 'mongodb://nathan:nathan@ds137281.mlab.com:37281/gregs-list'
var connection = mongoose.connection

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended:  true}))
server.use(cors())
server.use('/', express.static(`${__dirname}/public/`))
server.use(routes.router)

