const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const clientRoutes = require("./routes/client") 
const generalRoutes = require("./routes/general") 
const managementRoutes = require("./routes/management") 
const salesRoutes = require("./routes/sales") 


//Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


/* Routes */
app.use("/client" , clientRoutes)
app.use("/general" , generalRoutes)
app.use("/management" , managementRoutes)
app.use("/sales" , salesRoutes)

/* Mongoose setup */

const PORT = process.env.PORT_NO || 9000

mongoose.connect(process.env.DB_URL , {
    useNewUrlParser: true,
 
  
}).then((res) => {
    app.listen(PORT , () => {
        console.log(`server stated on http://localhost:${PORT}`);
    })
}).catch((error)=>{
    console.log(`${error} failed to connet the database`);
})
