const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 3000
const database = require('./services/database')
const userRouter = require('./routes/user.route')

app.use(express.json())
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use('/public', express.static('public'));


app.use('/', userRouter)

database.connect();




app.listen(port, console.log(`Server listening at port ${port}`))


