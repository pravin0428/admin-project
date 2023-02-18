const express = require('express')
const bodyParaser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgon = require("morgan")
const clientRoutes = require("./routes/client.js") 
const generalRoutes = require("./routes/general.js") 
const managementRoutes = require("./routes/management.js") 
const salesRoutes = require("./routes/sales.js") 

//Configuration
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet()) 
   // we are using helmet for url instade of this ---> // app.use(express.urlencoded({extended : true}))
app.use(helmet.crossOriginEmbedderPolicy({policy : "cross-origin"})) 
app.use(morgon("common"))
app.use(bodyParaser.json())
app.use(bodyParaser.urlencoded({extended : false}))
app.use(cors())


/* Routes */
app.use("/client" , clientRoutes)
app.use("/general" , generalRoutes)
app.use("/management" , managementRoutes)
app.use("/sales" , salesRoutes)

app.listen(PORT_NO , () =>  {console.log('listening on http://localhost:8080')})