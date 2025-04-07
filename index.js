import express from "express";
import mongoose from "./config/db-connection.js";
import Podcast from "./models/Podcast.js"
const app = express();

// Importando as rotas (endpoints) de Games
import podcastRoutes from './routes/podcastRoutes.js'

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', podcastRoutes)


// Iniciando a conexão com o banco de dados do MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-podcast")

// Iniciando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});
