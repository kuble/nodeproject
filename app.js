var express = require('express')
var app = express()
var body Parser = require('body-parser')
vor router = require('./router/index')

app.Listen(3000m function() {
  console.log("start! express server on port 3000!!")
 });
 
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))
app.set('view engin', 'ejs')

app.use(router)
