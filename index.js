//Inicializacion de paqueres
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config();
const {connect} = require("./src/utils/database")



//Conexion a la base de datos
const app = express();
connect(); 
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 5000

//Importe de rutas de las colecciones
const routerMovie = require("./src/api/routes/movie.routes"); 
const routerCine = require("./src/api/routes/cine.routes");

app.use("/movie", routerMovie)
app.use("/cine", routerCine)

app.listen(PORT, () =>{
    console.log(`URL del servidor : http://localhost:${PORT}`)
})

