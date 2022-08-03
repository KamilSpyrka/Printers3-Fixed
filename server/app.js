const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('./config/config')
const adminRole = require('./controllers/AdminRole')
//App
const app = express()
app.use(bodyParser.json())
app.use(cors())

//Routes
require('./routes')(app)

//Production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'))
}

//DB
sequelize.sync()

//Create Admin account to user admin
adminRole.addAdmin()

.then(() =>{
    app.listen(config.port)
    console.log(`server started on port: ${config.port}`)
})
