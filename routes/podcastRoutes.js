import express from "express";
const podcastRoutes = express.Router();
import podcastController from "../controllers/podcastController.js";
// Importando o middleware de autenticação
// import Auth from '../middleware/Auth.js'

// Endpoint para listar todos os games (rota)
podcastRoutes.get("/podcasts", podcastController.getAllPodcast);

// Endpoint para cadastrar um jogo
podcastRoutes.post("/podcasts", podcastController.createPodcast);

// Endpoint para excluir um jogo
podcastRoutes.delete("/podcasts/:id", podcastController.deletePodcast);

// Endpoint para alterar um jogo
podcastRoutes.put("/podcasts/:id",  podcastController.updatePodcast)

// Endpoint para listar um único jogo
podcastRoutes.get("/podcasts/:id", podcastController.getOnePodcast)

export default podcastRoutes;
