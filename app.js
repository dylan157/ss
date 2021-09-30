const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')
const fs = require("fs")

//load config
dotenv.config({ path: './config/config.env'})

// Connect to database
connectDB()

//Set vars
const app = express()

//logging
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// ejs
app.set('view engine', 'hbs')

//Bodyparser
app.use(express.urlencoded({extended: false}))

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/tests', require('./routes/tests'))
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000

app.listen(
    PORT, 
    console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)